<?php

namespace App\Http\Controllers\Api\V1\Freelancer\ProjectManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Freelancer\ProjectManagement\StoreProjectRequest;
use App\Http\Requests\Api\V1\Freelancer\ProjectManagement\UpdateProjectRequest;
use App\Http\Resources\Api\V1\Freelancer\ProjectManagement\IndexProjectResource;
use App\Http\Resources\Api\V1\Freelancer\ProjectManagement\MyProjectResource;
use App\Models\Category;
use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Project;
use App\Models\ProjectBidder;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class ProjectManagementController extends Controller
{

    public function index(Request $request)
    {
        $keyword   = $request->input('keyword');
        $direction = $request->input('order_direction', 'asc');
        $orderBy   = $request->input('order_by', 'id');

        $projects = Project::query()
            ->when($keyword, function ($query) use ($keyword) {
                $query->where('title', 'like', '%' . $keyword . '%');
                $query->orWhere('description', 'like', '%' . $keyword . '%');
            })
            ->with(['projectCategories', 'projectCategories.category',  'user'])
            ->orderBy($orderBy, $direction)
            ->simplePaginate(10);

        foreach ($projects as $project) {
            $user = $project->user;
            if ($user instanceof Client) {
                $avatar = $user->profile->avatar ?? null;
            } elseif ($user instanceof Freelancer) {
                $avatar = $user->profile->avatar ?? null;
            }
        }

        return IndexProjectResource::collection($projects);
    }


    public function myProjects()
    {
        $user     = auth()->user();
        $projects = $user->projects()
            ->with('projectCategories', 'projectBidders')
            ->simplePaginate(10);

        return MyProjectResource::collection($projects);
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
        $newCategoryIds     = $request->input('categories', []);

        foreach ($newCategoryIds as $categoryId) {
            if (!in_array($categoryId, $currentCategoryIds)) {
                $category = Category::find($categoryId);
                if ($category) {
                    $serviceCategory = $project->projectCategories()->make();
                    $serviceCategory->category()->associate($category);
                    $serviceCategory->save();
                }
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

    public function bidProject(Project $project)
    {
        $projectBidder =  new ProjectBidder();

        $projectBidder->project()->associate($project);
        $projectBidder->freelancer()->associate(auth()->user());
        $projectBidder->save();

        return response()->json([
            "message" => "Project Bidder",
        ]);
    }

}
