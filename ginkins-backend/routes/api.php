<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post('/contact', [ContactController::class, 'send']);

use App\Http\Controllers\NewsletterController;

Route::post('/newsletter', [NewsletterController::class, 'subscribe']);
