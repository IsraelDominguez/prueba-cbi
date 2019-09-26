<?php

namespace Cbi\Tests;
use \PHPUnit\Framework\TestCase;

/**
 *
 */
class PruebaTest extends TestCase
{

	public function testFrameworkConfigured()
	{
		$this->assertTrue(true);
	}

	public function testTresEnRayaNotSolved()
	{
	    $board = [
	        [0,0,1],
            [0,1,2],
            [2,1,0]
        ];

		$this->assertEquals(-1, boardState($board));
	}

    public function testTresEnRayaHorizontalSolved()
    {
        $board = [
            [0,2,2],
            [1,1,1],
            [2,1,0]
        ];

        $this->assertEquals(1, boardState($board));

        $board = [
            [0,2,2],
            [0,1,1],
            [2,2,2]
        ];

        $this->assertEquals(2, boardState($board));

        $board = [
            [0,0,0],
            [1,1,2],
            [2,1,0]
        ];

        $this->assertEquals(-1, boardState($board));
    }

    public function testTresEnRayaVerticalSolved()
    {
        $board = [
            [1,2,2],
            [1,0,1],
            [1,1,0]
        ];

        $this->assertEquals(1, boardState($board));

        $board = [
            [0,2,2],
            [0,2,1],
            [1,2,0]
        ];

        $this->assertEquals(2, boardState($board));

        $board = [
            [2,0,0],
            [1,1,0],
            [2,0,0]
        ];

        $this->assertEquals(-1, boardState($board));
    }

    public function testTresEnRayaDiagonalsSolved()
    {
        $board = [
            [1,2,2],
            [1,1,0],
            [2,0,1]
        ];

        $this->assertEquals(1, boardState($board));

        $board = [
            [2,2,0],
            [0,2,1],
            [1,0,2]
        ];

        $this->assertEquals(2, boardState($board));

        $board = [
            [2,1,0],
            [1,0,0],
            [0,0,2]
        ];

        $this->assertEquals(-1, boardState($board));
    }

    public function testTresEnRayaEqualsSolved() {
        $board = [
            [2,1,2],
            [1,2,1],
            [1,2,1]
        ];

        $this->assertEquals(0, boardState($board));
    }
}
