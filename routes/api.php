<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::post('/registrations', [RegistrationController::class, 'store']);