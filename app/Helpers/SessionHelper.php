<?php

if (!function_exists('Setter')) {
    function Setter($key = null, $val = null)
    {
        return Session::flash($key, $val);
    }
}

if (!function_exists('Getter')) {
    function Getter($key = null)
    {
        return Session::get($key);
    }
}

if (!function_exists('Responses')) {
    function Responses($payload = '', $status = 200)
    {
        return response()->json($payload, $status)
            ->header('Content-Type', ['application/json', 'application/x-www-form-urlencoded', 'charset=utf-8']);
    }
}

if (!function_exists('SignitureENV')) {
    function SignitureENV(){
        return $_ENV['SIGNITURE'];
    }
}

if (!function_exists('JWTToken')) {
    function JWTToken()
    {
        # retrieve token
        $token = JWTAuth::getToken();
        return $token;
    }
}

if(!function_exists('bearerToken')) {
    function bearerToken($request)
    {
        return explode('Bearer ', trim(explode(':', $request->header('Authorization'))[0]))[1];
    }    
}