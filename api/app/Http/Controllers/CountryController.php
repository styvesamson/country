<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;



class CountryController extends Controller
{
    /**
     * Display a listing of Countries .
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Country::orderBy('name', 'asc')->get();
    }

      /**
     * Display a listing of Countries && Codes .
     *
     * @return \Illuminate\Http\Response
     */
    public function flip()
    {
        //
    }

    /**
     * Display a listing of  Sorted  .
     *
     * @return \Illuminate\Http\Response
     */
    public function sort()
    {
        //
    }

}
