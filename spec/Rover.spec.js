import Rover from '../Mars Rover/Rover';
import {DIRECTION} from '../Mars Rover/Direction';
import Plateau from '../Mars Rover/Plateau';

describe("Rover", function() {
    const plateau = new Plateau(5, 5);
    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.N, 0, 0)
        
        rover.executeCommands(['M', 'R', 'M']);

        expect(rover.x).toBe(1);
        expect(rover.y).toBe(1);
    });

    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.N, 2, 2)
        
        rover.executeCommands(['L', 'L', 'M', 'M']);

        expect(rover.x).toBe(2);
        expect(rover.y).toBe(0);
    });

    it("should return correction position when moved", function() {
        const rover = new Rover(plateau, DIRECTION.S, 5, 5)
        
        rover.executeCommands(['M', 'M', 'R', 'R', 'M', 'L']);

        expect(rover.x).toBe(5);
        expect(rover.y).toBe(4);
    });



});