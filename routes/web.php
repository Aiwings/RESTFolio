<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//use App\Http\Controllers\BlockController;

$router->group(["prefix" => "api"], function ($router) {
    $router->post('/login', 'UserController@authenticate');
    //$router->post('/signin', 'UserController@signIn');
    $router->group(["prefix" => "blocks"], function ($router) {
        $router->get("/", "BlockController@index");
        $router->post("/", "BlockController@create");
        $router->get("/{slug}", "BlockController@show");
        $router->put("/{slug}", "BlockController@update");
        $router->delete("/{slug}", "BlockController@delete");
    });
});

$router->get('/{route:.*}/', function () {
    return view('app', ['description' => 'Portfolio de Guillaume ROUX']);
});
