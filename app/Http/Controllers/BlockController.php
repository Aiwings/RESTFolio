<?php

namespace App\Http\Controllers;

use App\Models\Block;

use Illuminate\Http\Request;

class BlockController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', [
            'only' => [
                "create", "update", "delete"
            ]
        ]);
    }

    public function index()
    {
        $blocks = Block::all();
        return response()->json($blocks);
    }
    private function get($slug)
    {
        return  $block = Block::where('slug', $slug)->firstOrFail();
    }

    public function show($slug)
    {
        $block = $this->get($slug);
        return response()->json($block);
    }
    public function create(Request $request)
    {
        $block = new Block();
        $block->name = $request->name;
        $block->slug = $request->slug;
        $block->content = $request->content;
        $block->save();
        return response()->json(array(
            "success" => true,
        ));
    }

    public function update(Request $request, $slug)
    {
        $block = $this->get($slug);
        $block->name = $request->name;
        $block->content = $request->content;
        $block->save();
        return response()->json($block);
    }

    public function delete($slug)
    {
        $block = $this->get($slug);
        $block->delete();
        return response()->json([
            "success" => true
        ]);
    }
}
