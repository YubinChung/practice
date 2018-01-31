<?php

namespace App\Http\Controllers;


use App\User;
use Validator;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e){
            return response()-> json(['error' => 'could_not_create_token'], 500);
        }

        $data['success'] = 1;
        $data['token'] = $token;
        return response()->json(compact('data'));
    }

    public function register(Request $request)
    {
        // body 에 파라메터 값을 던져라
//        $this->validate($request, [
//            'name' => 'required|max:30',
//            'email' => 'required',
//            'password' => 'required',
//        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = \Hash::make($request->password);

        $user->save();

        return response()-> json(compact('user'));
    }
}
