<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function index(){
        $users = User::get()[0]; 
        return Inertia::render('Welcome',['items'=>$users->items()]);
    }
}
