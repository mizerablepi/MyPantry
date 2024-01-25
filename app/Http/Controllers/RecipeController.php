<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class RecipeController extends Controller
{
    public function index(){

        return Inertia::render('Recipe');
    }
}
