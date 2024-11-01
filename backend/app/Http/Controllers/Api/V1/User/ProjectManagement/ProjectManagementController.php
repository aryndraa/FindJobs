<?php

namespace App\Http\Controllers\Api\V1\User\ProjectManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\ProjectManagement\IndexProjectResource;
use App\Http\Resources\Api\V1\User\ProjectManagement\ShowProjectResource;
use App\Models\Project;
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
            ->with(['projectCategories', 'projectCategories.category',  'client', 'client.clientProfile', 'client.clientProfile.avatar'])
            ->orderBy($orderBy, $direction)
            ->simplePaginate(10);

        return indexProjectResource::collection($projects);
    }

    public function projectByCategoryId($categoryIds, Request $request)
    {
        $categoryIds = explode(',', $categoryIds);
        $keyword   = $request->input('keyword');
        $direction = $request->input('order_direction', 'asc');
        $orderBy   = $request->input('order_by', 'id');

        $projects = Project::query()
            ->whereHas('projectCategories', function ($query) use ($categoryIds) {
                $query->whereIn('category_id', $categoryIds);
            })
            ->when($keyword, function ($query) use ($keyword) {
                $query->where('title', 'like', '%' . $keyword . '%');
                $query->orWhere('description', 'like', '%' . $keyword . '%');
            })
            ->with(['projectCategories', 'projectCategories.category',  'client', 'client.clientProfile', 'client.clientProfile.avatar'])
            ->orderBy($orderBy, $direction)
            ->simplePaginate(10);

        return indexProjectResource::collection($projects);
    }

    public function show(Project $project)
    {

        $project->load([
            'projectCategories',
            'projectCategories.category',
            'client',
            'client.clientProfile',
            'client.clientProfile.avatar',
            'projectsBidders',
            'client.projects' => function ($query) use ($project) {
                $query->where('id', '!=', $project->id)
                    ->with(['projectCategories', 'projectCategories.category'])
                    ->limit(4);
            }
        ]);

        $project->bidders_count = $project->projectsBidders->count();

        return ShowProjectResource::make($project);
    }
}
