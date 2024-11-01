<?php

namespace App\Http\Controllers\Api\V1\Client\ProjectManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Client\ProjectManagement\StoreProjectRequest;
use App\Http\Requests\Api\V1\Client\ProjectManagement\UpdateProjectRequest;
use App\Http\Resources\Api\V1\User\ProjectManagement\IndexProjectResource;
use App\Models\Project;
use App\Models\ProjectCategory;

class ProjectManagementController extends Controller
{
    public function index()
    {
        $user     = auth()->user();
        $projects = $user->projects()
            ->with('projectCategories', 'projectBidders')
            ->simplePaginate(10);

        return IndexProjectResource::collection($projects);
    }


    public function store(StoreProjectRequest $request)
    {
        $client  = auth()->user();
        $project = $client->projects()->create($request->validated());

        $project->save();

        foreach($request->categories as $categoryId) {
            $projectCategories = new ProjectCategory();

            $projectCategories->project()->associate($project->id);
            $projectCategories->category()->associate($categoryId);
            $projectCategories->save();
        }

        $project->load('projectCategories');

        return response()->json([
            "message" => "Project Create Is Successful ",
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->validated());

        $currentCategoryIds = $project->projectCategories()->pluck('category_id')->toArray();
        $newCategoryIds     = $request->categories;

        foreach ($newCategoryIds as $categoryId) {
            if (!in_array($categoryId, $currentCategoryIds)) {
                $project->projectCategories()->create([
                    'category_id' => $categoryId,
                ]);
            }
        }

        foreach ($currentCategoryIds as $categoryId) {
            if (!in_array($categoryId, $newCategoryIds)) {
                $project->projectCategories()->where('category_id', $categoryId)->delete();
            }
        }

        $project->load('projectCategories');


        return response()->json([
            "message" => "Project Update Is Successful ",
        ]);
    }

    public function isComplete(Project $project)
    {
        if (!$project->is_completed) {
            $project->update(['is_completed' => true]);

            return response()->json([
                "message" => "Project Complete",
            ]);
        }

        $project->update(['is_completed' => false]);

        return response()->json([
            "message" => "Project Uncompleted",
        ]);
    }

    public function bidStatus(Project $project)
    {
        if (!$project->bid_status) {
            $project->update(['bid_status' => true]);

            return response()->json([
                "message" => "Queue Closed",
            ]);
        }

        $project->update(['bid_status' => false]);

        return response()->json([
            "message" => "Queue Opened",
        ]);
    }
}
