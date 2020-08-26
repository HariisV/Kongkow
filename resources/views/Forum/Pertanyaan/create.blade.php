@extends('Forum.default.index')

@section('content')
    <h1>Test Connect</h1>

    <div class="container m-5">
        <ul>
            @foreach ($test as $tests)
                <li>{{$tests->text}}</li>
            @endforeach
        </ul>
    </div>

@endsection