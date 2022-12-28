<h1>Customers</h1>

<a href="/customers/create">Add New Customer</a>
<a href="/customers?active=1">Active</a>
<a href="/customers?active=0">Inactive</a>

@forelse ($customers as $customer)
    <p>
        <strong>
            <a href="/customers/{{ $customer->id }}">{{ $customer->name }}</a>
        </strong>
        &nbsp;({{ $customer->email }})
    </p>
@empty
    <p>No Customer to show</p>
@endforelse
