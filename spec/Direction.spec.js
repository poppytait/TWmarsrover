import {DIRECTION} from '../Mars Rover/Direction';

describe("Direction", function() {
    it("should face W if it turns left at N", function() {
        const north = DIRECTION.N;
        const turnLeft = true;

        const west = north(turnLeft);
        
        expect(west).toEqual(DIRECTION.W);
    });

    it("should face S if it turns left at W", function() {
        const west = DIRECTION.W;
        const turnLeft = true;

        const south = west(turnLeft);
        
        expect(south).toEqual(DIRECTION.S);
    });

    it("should face E if it turns left at S", function() {
        const south = DIRECTION.S;
        const turnLeft = true;

        const east = south(turnLeft);
        
        expect(east).toEqual(DIRECTION.E);
    });

    it("should face N if it turns left at E", function() {
        const east = DIRECTION.E;
        const turnLeft = true;

        const north = east(turnLeft);
        
        expect(north).toEqual(DIRECTION.N);
    });
    it("should face E if it turns right at N", function() {
        const north = DIRECTION.N;
        const turnLeft = false;

        const east = north(turnLeft);
        
        expect(east).toEqual(DIRECTION.E);
    });
    it("should face S if it turns right at E", function() {
        const east = DIRECTION.E;
        const turnLeft = false;

        const south = east(turnLeft);
        
        expect(south).toEqual(DIRECTION.S);
    });
    it("should face W if it turns right at S", function() {
        const south = DIRECTION.S;
        const turnLeft = false;

        const west = south(turnLeft);
        
        expect(west).toEqual(DIRECTION.W);
    });
    it("should face N if it turns right at W", function() {
        const west = DIRECTION.W;
        const turnLeft = false;

        const north = west(turnLeft);
        
        expect(west).toEqual(DIRECTION.W);
    });
  });

 


