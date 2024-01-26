<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class RecipeController extends Controller
{
    public function index(Request $req){
        
        $queryString = "";
        $items = $req->user()->items()->get();
        foreach($items as $key => $item){
            if($key == 0){
                $queryString = $queryString.$item->name;
            }else{
                $queryString = $queryString.',+'.$item->name;
            }
        }
        unset($item);

        $recipes = Http::get(env('API_RECIPES_URL').'?apiKey='.env('API_KEY').'&ingredients='.$queryString.'&ranking=2')->body();

        return Inertia::render('Recipe',['recipes'=>json_decode($recipes)]);
    }

    public function show(Request $req, $id){
        $item = Http::get(env('API_RECIPE_URL').'/'.$id.'/information'.'?apiKey='.env('API_KEY'));

        $title = json_decode($item->body())->title;

        $recipe = Http::get(env('API_RECIPE_URL').'/'.$id.'/analyzedInstructions'.'?apiKey='.env('API_KEY'))->body(); 
        return Inertia::render('Steps',['recipe'=>json_decode($recipe)[0], 'title'=> $title]);
    }
}
