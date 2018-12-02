import Rover from '../Mars Rover/Rover';
import {DIRECTION} from '../Mars Rover/Direction';
import Plateau from '../Mars Rover/Plateau';

describe("Rover", function() {
    const plateau = new Plateau(5, 5);
    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.N, 0, 0)
        
        rover.executeCommand('M');

        expect(rover.x).toBe(0);
        expect(rover.y).toBe(1);
    });

    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.N, 2, 2)
        
        rover.executeCommand('L');

        expect(rover.direction).toBe(DIRECTION.W);
    });

    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.N, 4, 5)
        
        rover.executeCommand('R');

        expect(rover.direction).toBe(DIRECTION.E);
    });

    it("should return correction position when moved", function() {
     
        const rover = new Rover(plateau, DIRECTION.E, 1, 5)
        
        rover.executeCommand('R');

        expect(rover.direction).toBe(DIRECTION.S);
    });

    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.W, 4, 2)
        
        rover.executeCommand('R');

        expect(rover.direction).toBe(DIRECTION.N);
    });

});