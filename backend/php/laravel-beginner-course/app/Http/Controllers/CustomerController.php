<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use \App\Models\Customer;
use Illuminate\Support\Facades\Mail;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        // dd($request->query('active', $request->query('active')));
        $customers = Customer::where('active', $request->query('active', 1))->get();

        return view('customer.index', compact('customers'));
    }

    public function create()
    {
        $customer = new Customer();

        return view("customer.create", compact('customer'));
    }

    public function store()
    {
        $customer = Customer::create($this->validatedData());

        Mail::to($customer->email)->send(new WelcomeMail());

        return redirect('/customers');
    }

    public function show(Customer $customer)
    {
        // $customer = Customer::findOrFail($customer);

        return view("customer.show", compact('customer'));
    }

    public function edit(Customer $customer)
    {
        return view("customer.edit", compact('customer'));
    }

    public function update(Customer $customer)
    {
        $customer->update($this->validatedData());

        return redirect('/customers/' . $customer->id);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return redirect('/customers');
    }

    protected function validatedData()
    {
        return request()->validate([
            'name' => "required|min:3|max:100",
            'email' => "required|email",
        ]);
    }
}
