const snail = require('../problems/caracol')

xdescribe('Snail Matrix', function() {
	xit('test framework setup correct', function() {
	    expect(true).toBe(true);
	});

	it('caracol4x4', function() {
        var input = [
            [1,  2,   3,  4],
            [5,  6,   7,  8],
            [9,  10, 11, 12],
            [13, 14, 15, 16]
        ];

		expect([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]).toEqual(snail(input));
	});

    it('caracol2x2', function() {
        var input = [
            [1,  2],
            [1,  2],
            [5,  6]
        ];

        expect([1,2,6,5]).toEqual(snail(input));
    });

    it('caracol1x1', function() {
        var input = [
            [1]
        ];

        expect([1]).toEqual(snail(input));
    });

    it('caracol10x10', function() {
        var input = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
            [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
            [34, 63, 84, 85, 86 ,87 ,88, 71, 46, 13],
            [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
            [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
            [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
            [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
            [29, 58, 57, 56, 55, 54, 53, 52, 51, 18],
            [28, 27, 26, 25 ,24 ,23 ,22, 21, 20, 19],
        ];

        expect([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 ]).toEqual(snail(input));
    });
});


const navigate = require('../problems/gps')

xdescribe('GPS Navigation', () => {
    xit('test framework setup correct', function() {
        expect(true).toBe(true);
    });
    it('case 1', () => {
        const roads = [
           {from: 0, to: 1, drivingTime: 5},
           {from: 0, to: 2, drivingTime: 10},
           {from: 1, to: 2, drivingTime: 10},
           {from: 1, to: 3, drivingTime: 2},
           {from: 2, to: 3, drivingTime: 2},
           {from: 2, to: 4, drivingTime: 5},
           {from: 3, to: 2, drivingTime: 2},
           {from: 3, to: 4, drivingTime: 10},
         ];

        // should return [0, 1, 3, 2, 4]. Fastest time is 5 + 2 + 2 + 5 = 14 minutes
        expect(navigate(5, roads, 0, 4)).toEqual([0, 1, 3, 2, 4])
    });
    xit('case 2', () => {
        const roads = [
            {from: 0, to: 1, drivingTime: 5},
            {from: 0, to: 2, drivingTime: 10},
            {from: 1, to: 2, drivingTime: 10},
            {from: 1, to: 3, drivingTime: 2},
            {from: 2, to: 3, drivingTime: 2},
            {from: 2, to: 4, drivingTime: 5},
            {from: 3, to: 2, drivingTime: 2},
            {from: 3, to: 4, drivingTime: 10},
        ];

        expect(navigate(4, roads, 1, 4)).toEqual([1, 3, 2, 4])
    })
});

