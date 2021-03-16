<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SliderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/SendVisitorDetails',[VisitorController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails',[ContactController::class,'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteInfoController::class,'SendSiteInfo']);
Route::get('/SendCategoryDetails',[CategoryDetailsController::class,'SendCategoryDetails']);
Route::get('/ProductListByRemark/{remark}',[ProductListController::class,'ProductListByRemark']);
Route::get('/ProductListBySubCategory/{Category}/{SubCategory}',[ProductListController::class,'ProductListBySubCategory']);
Route::get('/ProductListByCategory/{Category}',[ProductListController::class,'ProductListByCategory']);
Route::get('/SendSliderInfo',[SliderController::class,'SendSliderInfo']);
Route::get('/ProductDetails/{code}',[ProductDetailsController::class,'ProductDetails']);



