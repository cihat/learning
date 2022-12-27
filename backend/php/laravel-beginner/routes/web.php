<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index']);

Route::get('/about', [HelloController::class, 'about']);
// Route::view('/about', 'about');

Route::get('/service', [ServiceController::class, 'index']);
Route::post('/service', [ServiceController::class, 'store']);
// Route::view('/services', 'services');

Route::get('/customers', [CustomerController::class, 'index']);
Route::get('/customers/create', [CustomerController::class, 'create']);
Route::post('/customers', [CustomerController::class, 'store']);
Route::get('/customers/{customer}', [CustomerController::class, 'show']);
Route::get('/customers/{customer}/edit', [CustomerController::class, 'edit']);
Route::patch('/customers/{customer}', [CustomerController::class, 'update']);
Route::delete('/customers/{customer}', [CustomerController::class, 'destroy']);
