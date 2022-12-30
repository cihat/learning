<!DOCTYPE html>
<html>

<head>
    <title>How to create url shortener using Laravel? - ItSolutionStuff.com</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
</head>

<body>
    <div class="container">
        <h1>URL Shorter</h1>
        <div class="card">
            <div class="card-header">
                <form method="POST" action="/">
                    @csrf
                    <div class="input-group mb-2">
                        <input type="text" name="link" class="form-control" placeholder="Enter URL"
                            aria-label="Enter URL" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit">Generate Shorten Link</button>
                        </div>
                    </div>
                    @error('link')
                        <div class="alert alert-danger mb-1">{{ $message }}</div>
                    @enderror
                </form>
            </div>
            <div class="card-body">
                @if (Session::has('success'))
                    <div class="alert alert-success">
                        <p>{{ Session::get('success') }}</p>
                    </div>
                @endif
                <table class="table table-bordered table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Short Link</th>
                            <th>Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($shortLinks as $row)
                            <tr>
                                <td>{{ $row->id }}</td>
                                <td><a href="{{ $row->link }}" target="_blank">{{ $row->code }}</a></td>
                                <td>{{ $row->link }}</td>
                                <td>
                                    <form action="/{{ $row->id }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>

</html>
