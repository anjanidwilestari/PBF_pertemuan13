<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/greeting', function(){
//     return 'Hello World';
// });

Route::get('products', [ProductsController::class, 'index'])->middleware('auth')->name(
    'products.index'
);

// Route::get('products1', [ProductsController::class, 'index1'])->name(
//     'products.index'
// );

Route::post('products', [ProductsController::class, 'store'])->name(
    'products.store'
);

Route::get('products/{product}', [ProductsController::class, 'show'])->name(
    'products.show'
);

Route::put('products/{product}', [ProductsController::class, 'update'])->name(
    'products.update'
);

Route::delete('products/{product}', [ProductsController::class, 'destroy'])->name(
    'products.destroy'
);