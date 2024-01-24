<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/autocomplete', function(Request $request){
    
    $response = Http::get(env('API_ITEM_AUTOCOMPLETE_URL').'?apiKey='.env('API_KEY').'&query='.$request->string.'&number=5');
    return $response->body();
});
