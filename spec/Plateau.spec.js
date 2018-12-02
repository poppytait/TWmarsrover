import Plateau from '../Mars Rover/Plateau'

describe("Plateau", function() {
    
    it("should return true if within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 5;
        const y = 5;
        
        expect(plateau.inBounds(x, y)).toBe(true);
    });

    it("should return true if within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 0;
        const y = 0;
        
        expect(plateau.inBounds(x, y)).toBe(true);
    });

    it("should return true if within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 3;
        const y = 5;
        
        expect(plateau.inBounds(x, y)).toBe(true);
    });

    it("should return true if within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 2;
        const y = 1;
        
        expect(plateau.inBounds(x, y)).toBe(true);
    });

    it("should return true if within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 5;
        const y = 0;
        
        expect(plateau.inBounds(x, y)).toBe(true);
    });

    it("should return false if not within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 0;
        const y = -6;
        
        expect(plateau.inBounds(x, y)).toBe(false);
    });

    it("should return false if not within bounds", function() {
        const plateau = new Plateau(5, 5);
        const x = 6;
        const y = -1;
        
        expect(plateau.inBounds(x, y)).toBe(false);
    });
});