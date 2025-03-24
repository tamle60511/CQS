<?php

namespace App\Http\Controllers\Frontend;
use Inertia\Inertia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        return Inertia::render('Templates/Contact');
    }
}
