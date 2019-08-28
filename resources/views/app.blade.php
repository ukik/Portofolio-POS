<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>WARUNG MAKAN WADAH KITA</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="{{ asset('css/app.css')}}" rel="stylesheet">
        <link href="{{ asset('css/font-awesome.min.css')}}" rel="stylesheet">
        <link href="{{ asset('css/photoswipe/default-skin.css')}}" rel="stylesheet">

    </head>
    <body>
        <div id="app">

        </div>
    <script src="{{ asset('js/app.js')}}"></script>
    <script src="{{ asset('js/photoswipe-ui-default.min.js')}}"></script>

    </body>
</html>
