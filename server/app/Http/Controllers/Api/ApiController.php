<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ApiController extends Controller {

	protected function getTvShowById($id) : Array {

	}

	protected function getTvShowByName($name) : Array {
		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => 'http://thetvdb.com/api/GetSeries.php?seriesname=' . urlencode($name)
		));
		$response = curl_exec($curl);
		curl_close($curl);

		return json_decode(json_encode(simplexml_load_string(trim($response))), TRUE);
	}

}
