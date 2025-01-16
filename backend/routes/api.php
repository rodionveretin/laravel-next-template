<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsersController;
use App\Http\Controllers\Auth\OAuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/health', function () {
    return response()->json(['status' => 'OK']);
});

Route::get('/users', [UsersController::class, 'index']);

Route::middleware('guest')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::get('{provider}/redirect', [OAuthController::class, 'redirect']);
        Route::get('{provider}/callback', [OAuthController::class, 'callback']);
    });
});
