@extends('app')

@section('title', 'Services Page')

@section('content')
    <h1>Welcome to Laravel 9 from Services</h1>

    <p>With some additional text.</p>

    <form action="/service" method="post">
        <input type="text" name="name" autocomplete="off">

        @csrf

        <button>Add Service</button>
    </form>

    <p style="color: red;">
        @error('name') {{ $message }} @enderror
    </p>

    <ul>
        @forelse ($services as $service)
            <li>
                <p>{{ $service->name }}</p>
            </li>
        @empty
            <li>
                <p>No services available</p>
            </li>
        @endforelse
    </ul>
@endsection
