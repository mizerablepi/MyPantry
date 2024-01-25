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
        return Inertia::render('CreateItem');
    }

    public function store(Request $req){

        $user = $req->user();
        if($user->items()->where('name', $req->name)->exists()){
            return Inertia::render('CreateItem',['errors'=>['Item already in pantry']]);
        }
        
        $item = Item::firstOrCreate(['name'=>$req->name]);
        $user->items()->attach($item, ['amount'=>$req->amount]);

        return Redirect::to('/pantry');
    }

    public function edit(Request $req, $id){
        $user = $req->user();
        $item = $user->items()->where('id',$id)->first();
        return Inertia::render('EditItem',['item'=>$item]);
    }

    public function update(Request $req, $id){
        $user = $req->user();
        $item = $user->items()->where('id',$id)->first();
        $item->pivot->amount = $req->amount;
        $item->pivot->save();
        return Redirect::to('/pantry');
    }

    public function destroy(Request $req, $id){
        $user = $req->user();
        $user->items()->detach(['id'=>$id]);
        return Redirect::to('/pantry');
    }
}
