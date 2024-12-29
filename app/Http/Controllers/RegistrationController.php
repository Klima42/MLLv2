<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'parentLastName' => 'required|string|max:255',
            'parentFirstName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'childLastName' => 'required|string|max:255',
            'childFirstName' => 'required|string|max:255',
            'birthDate' => 'required|date',
            'startDate' => 'required|date',
            'comments' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $registration = Registration::create([
            'parent_last_name' => $request->parentLastName,
            'parent_first_name' => $request->parentFirstName,
            'email' => $request->email,
            'phone' => $request->phone,
            'child_last_name' => $request->childLastName,
            'child_first_name' => $request->childFirstName,
            'birth_date' => $request->birthDate,
            'start_date' => $request->startDate,
            'comments' => $request->comments
        ]);

        return response()->json(['message' => 'Registration submitted successfully', 'data' => $registration], 201);
    }
}