<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ItemController extends Controller
{
    public function index(){
        $users = User::get()[0]; 
        return Inertia::render('Pantry',['items'=>$users->items()]);
    }

    public function create(){
        return Inertia::render('CreateItem',['token'=>csrf_token()]);
    }

    public function store(Request $req){
        // dd($req->name);
        
        return Redirect::to('/pantry');
    }
}
