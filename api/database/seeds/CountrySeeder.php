<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    private $countries = array();


    /**
     * Get a data form GitHub repo.
     *
     * @return void
     */
    private  function getCountries(){

        $data = file_get_contents('https://gist.githubusercontent.com/ivanrosolen/f8e9e588adf0286e341407aca63b5230/raw/99e205ea104190c5e09935f06b19c30c4c0cf17e/country',
            NULL, NULL, 75);


        $lines = explode("\n", $data);
        $collection = new \Illuminate\Database\Eloquent\Collection();
        foreach ($lines as $line) {
            $row = explode('   ', $line);
            $country =  new \App\Country();
            $country->name = $row[1];
            $country->code = $row[0];
            $collection->add($country);
        }

        $this->countries = $collection;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $this->getCountries();

        foreach ($this->countries as $country){
            $country->save();
        }
    }



}
