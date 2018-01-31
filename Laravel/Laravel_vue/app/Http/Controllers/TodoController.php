<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\User;
use App\Todo;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class TodoController extends Controller
{
     public function index() {
         $user = JWTAuth::parseToken()->authenticate();

         $todos = DB::table('users')
             ->where('user_id', $user->id)
             ->join('todos', 'users.id', '=', 'todos.user_id')
             ->select('todos.*')
             ->get();
         return response()-> json(compact('todos'));
     }

     public function store(Request $request){
         $user  = JWTAuth::parseToken()->authenticate();
         $user or die();

         try{
         $todo = new Todo();
         $todo -> user_id = $user->id;
         $todo -> name = $request->name;
         $todo -> description = $request -> description;
         $todo -> due_date = $request -> due_date;
         $todo ->save();
         }catch(JWTException $e) {
             return response()-> json(['error' => 'could_not_create_token'], 401);
         }


         $data['success'] = 1;

         return response()-> json(compact('data'));
     }
}
