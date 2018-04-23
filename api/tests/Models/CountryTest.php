<?php

namespace Tests\Models;

use App\Country;
use Tests\TestCase;

class CountryTest extends TestCase
{
    /**
     * @protected Country
     */
    protected $country;



    public function setUp()
    {
        parent::setUp();

        $this->country = Country::create(['name' => 'TEST COUNTRY', 'code' => 'TTT']);
    }

    public function testCreateCountry()
    {
        $this->assertEquals('TTT', $this->country->code);
    }

    public function testUpdateCountry()
    {
        $this->country->update([
            'code' => 'TT2'
        ]);

        $this->country = Country::find($this->country->id);

        $this->assertEquals('TT2', $this->country->code);
    }

}
