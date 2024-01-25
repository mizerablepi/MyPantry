<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ItemController extends Controller
{
    public function index(Request $req){
        $users = $req->user(); 
        return Inertia::render('Pantry',['items'=>$users->items()->get()]);
    }

    public function create(){
        return Inertia::render('CreateItem',['token'=>csrf_token()]);
    }

    public function store(Request $req){

        $user = $req->user();
        $item = new Item(['name'=>$req->name]);
        
        
        
        return Redirect::to('/pantry');
    }
}
