<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Facades\App\Utilities\JWTUtility;

class LoginController extends Controller
{
    public function login()
    {
        $login = JWTUtility::login();
        return $login;
    }

    public function logout()
    {
        $logout = JWTUtility::logout();
        return $logout;
    }

    public function register(Request $request)
    {
        $register = JWTUtility::register($request);
        return $register;
    }    

    public function refresh()
    {
        $refresh = JWTUtility::refresh();
        return $refresh;
    }    

}
