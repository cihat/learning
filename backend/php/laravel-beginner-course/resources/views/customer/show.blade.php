<h1>Customer Details</h1>


<a href="/customers">Back</a>
<br>
<hr>

<strong>Name</strong>

<p>{{ $customer->name }}</p>

<strong>Email</strong>
<p>{{ $customer->email }}</p>

<div>
    <a href="/customers/{{ $customer->id }}/edit">Edit</a>

    <form action="/customers/{{ $customer->id }}" method="POST">
        @method('DELETE')
        @csrf

        <button>Delete</button>
    </form>
</div>
