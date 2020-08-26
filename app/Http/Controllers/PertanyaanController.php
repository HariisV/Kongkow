<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\test;

class PertanyaanController extends Controller
{
    public function create(Request $request){
        $test = test::get();
        return view('Forum.Pertanyaan.create',compact('test'));
    }
}
