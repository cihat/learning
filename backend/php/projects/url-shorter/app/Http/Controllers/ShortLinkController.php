<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShortLink;

use Illuminate\Support\Str;

/**
 * ShortLinkController
 */
class ShortLinkController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        $shortLinks = ShortLink::latest()->get();

        return view('shortenLink', compact('shortLinks'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'link' => 'required|url|unique:short_links,link'
        ]);

        $input['link'] = $request->link;
        $input['code'] = "this-is-link/" . Str::random(10);
        ShortLink::create($input);

        return redirect('/')
            ->with('success', 'Shorten Link Generated Successfully!');
    }

    /**
     * destroy
     *
     * @param  mixed $id
     * @return void
     */
    public function destroy($id)
    {
        ShortLink::findOrFail($id)->delete();

        return redirect('/')
            ->with('success', 'Shorten Link Deleted Successfully!');
    }

    /**
     * shortenLink
     *
     * @param  mixed $code
     * @return void
     */
    public function shortenLink($code)
    {
        $find = ShortLink::where('code', $code)->first();

        return redirect($find->link);
    }
}
