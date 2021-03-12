<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/SendVisitorDetails',[VisitorController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails',[ContactController::class,'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteInfoController::class,'SendSiteInfo']);



