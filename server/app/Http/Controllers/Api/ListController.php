<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

use DB;
use App\Models\Show;
use App\Http\Requests;

class ListController extends ApiController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() : JsonResponse {

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() : JsonResponse {

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  string $category
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request, $category) : Response {
		$properties = $request->json('properties');

		switch ($category) {
			case 'shows':
				foreach ($properties as $property) {
					$show = new Show();
					$show->fill($property);
					$show->save();
				}
				break;
			default:
				abort(404);
				break;
		}

		return response()->make([], 204);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  string $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function show(Request $request, $id) : JsonResponse {
		$category = $request->segment(3);

		$json = [
			'category' => '',
			'items' => []
		];

		switch ($category) {
			case 'shows':
				$shows = DB::table('shows')->select('id', 'name', 'year')->get();
				foreach ($shows as $show) {
					$parameters = clone $show;
					unset($parameters->id);

					$json['items'][] = [
						'id' => $show->id,
						'properties' => $parameters
					];
				}

				$json['category'] = 'shows';

				break;
			default:
				abort(404);
				break;
		}

		return response()->json($json);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id) : JsonResponse {

	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id) : JsonResponse {

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id) : JsonResponse {

	}
}
