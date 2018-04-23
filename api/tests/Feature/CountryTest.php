<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Country;

class CountryTest extends TestCase
{


    public function setUp()
    {
        parent::setUp();

        $this->country = Country::create(['code' => 'CCC', 'name' => 'Fake Country']);
    }


    /**
     * CountryController@index Test.
     *
     * @return void
     */

    public function testGetCountries()
    {
        $response = $this->get('api/country');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            [
                'name',
                'code'
            ]

        ]);

        $response->assertJson([
            []
        ]);
    }
}
