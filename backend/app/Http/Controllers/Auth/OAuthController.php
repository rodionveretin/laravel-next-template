<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;

use App\Models\User;

class OAuthController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function callback(Request $request, $provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();

            if ($provider === 'mgpu') {
                $user = User::updateOrCreate(
                    [
                        'oauth_provider' => 'mgpu',
                        'oauth_id' => $socialUser->user['mail'],
                    ],
                    [
                        'firstname' => $socialUser->user['givenname'],
                        'lastname' => $socialUser->user['sn'],
                        'email' => $socialUser->user['mail'],
                        'oauth_provider' => 'mgpu',
                        'oauth_id' => $socialUser->user['mail'],
                    ]
                );
            }

            Auth::login($user);

            $request->session()->regenerate();

            return redirect('/');
        } catch (\Exception $e) {
            Log::error("Auth error: " . $e->getMessage());

            return response()->json(['error' => $e], 500);
        }
    }
}
