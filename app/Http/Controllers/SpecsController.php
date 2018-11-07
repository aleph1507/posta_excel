<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Adresnik;
use App\Entry;
use App\Spec;

class SpecsController extends Controller
{

    public function __construct() {
      $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $specs = auth()->user()->specs()->orderBy('created_at', 'desc')->paginate(10);
        return view('welcome')->with(compact('specs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $data = json_decode($request->data);
      $s = new Spec();
      $s->user_id = auth()->user()->id;
      $s->save();
      $s->barcode = 'SPEC' . $s->id . count($data);
      $s->save();
      for($i = 0; $i<count($data); $i++){
        $data[$i]->spec_id = $s->id;
        $data[$i]->{Adresnik::$seriski} = 'SERISKI';
        $da = (array)$data[$i];
        if(!array_key_exists('Место на примач', $da)){
          $da['Место на примач'] = '';
        }
        $e = Entry::create($da);
        $e->save();
        // $e->{Adresnik::$seriski} = 'МК' . (string)($e->id + 10000000);
        $e->{Adresnik::$seriski} = (string)($e->id + 10000000) . 'MK';
        $e->save();
      }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return json_encode(Spec::find($id)->entries);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
