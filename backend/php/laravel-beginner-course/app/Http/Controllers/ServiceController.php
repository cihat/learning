<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = \App\Models\Service::all();

        return view('service.index', compact('services'));
    }

    public function store()
    {

        $data = request()->validate([
            'name' => 'required|min:3|max:100'
        ]);

        \App\Models\Service::create($data);
        // $service = new \App\Models\Service();
        // $service->name = request('name');
        // $service->save();

        return redirect()->back();
    }
}
