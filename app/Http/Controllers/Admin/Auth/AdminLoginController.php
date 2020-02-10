<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminLoginController extends Controller
{
    public function login(Request $request) {

        // Check if a user with the specified email exists
        $user = Admin::where('email',request('email'))->first();
        if (!$user) {
            return response()->json([
                'errors' =>[ 
                	'invalid_user' => 'No user with this email exis in our system',
                ],
                'status' => 422
            ], 422);
        }

        // If a user with the email was found - check if the specified password
        // belongs to this user
        if (!Hash::check(request('password'), $user->password)) {
            return response()->json([
            	'errors' =>[ 
                	'invalid_user' => 'Wrong credentials',
                ],
                'status' => 422
            ], 422);
        }

        // Send an internal API request to get an access token
        $client = DB::table('oauth_clients')
                    ->where('password_client', true)
                    ->first();

        // Make sure a Password Client exists in the DB
        if (!$client) {
            return response()->json([
                'errors' =>[ 
                	'passport_error' => 'Laravel Passport is not setup properly.',
                ],
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }

        $token = $user->createToken('Laravel Password Grant Client', ['admin-only'])->accessToken;

        return response()->json(['access_token' => $token]);
    }


    public function logout()
    {
        $accessToken = auth()->user()->token();

        DB::table('oauth_access_tokens')->where('id', $accessToken->id)->delete();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->delete();

        return response()->json(['status' => 200]);
    }


    public function getAdmin(Request $request)
    {
    	return auth()->user();
    }
}
