<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use ErrorException;
use Exception;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api');
    }
    public function authenticate(Request $request)
    {
        $this->validate($request, [
            "email" => "required",
            "password" => "required"
        ]);
        $resp = [];
        $status = 0;
        try {

            $user = User::where('email', $request->input('email'))->first();

            if (Hash::check($request->input("password"), $user->password)) {
                $api_token = base64_encode(Str::random(40));
                User::where("email", $request->input("email"))->update(["remember_token" => $api_token]);
                $resp["success"] = true;
                $resp["api_token"] = $api_token;
                $status = 200;
            } else {
                throw new Exception("Mot de passe incorrect");
            }
        } catch (Exception $err) {
            $resp["success"] = false;
            $resp["error"] = $err->getMessage();
            $status = 401;
        }
        return response()->json($resp, $status);
    }
    public function  signIn(Request $request)
    {
        $this->validate($request, [
            "email" => "required|email|unique:users",
            "name" => "required",
            "password" => "required|unique:users|between:8,16"
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json([
            "success" => true
        ]);
    }
}
