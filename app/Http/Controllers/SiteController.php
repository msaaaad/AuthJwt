<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SiteController extends Controller
{
    
    public function Site()
    {

        return view('site.layout');    }
    
    public function cusMail($email){
        $user = User::where('email_address',$email)->get();
        return response()->json(['user'=>$user],200);
    }


}
