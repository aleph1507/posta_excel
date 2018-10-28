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
        //
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
        $e = Entry::create((array)$data[$i]);
        $e->save();
        $e->{Adresnik::$seriski} = 'SERISKI' . auth()->user()->id . $s->id . $e->id;
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
        //
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
