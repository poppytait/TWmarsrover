import {DIRECTION} from './Direction';

export default class Rover {
    constructor(plateau, direction, x, y){
        this.plateau = plateau;
        this.direction = direction;
        this.x = x;
        this.y = y
    }

    executeCommands(commands) {
        commands.forEach((command) => {
            this.executeCommand(command);
        })
    }

    executeCommand(command) {
        switch (command) {
            case 'M': 
                this.move(this.direction);
                break;

            case 'L':
                this.direction = this.direction(true);
                break;

            case 'R':
                this.direction = this.direction(false);
                break;

            default: 
                console.log('Execute command failed');
        }
    }

    move(direction) {
        switch (direction) {
            case DIRECTION.N:
                this.y++;
                break;

            case DIRECTION.E:
                this.x++;
                break;

            case DIRECTION.S:
                this.y--;
                break;

            case DIRECTION.W:
                this.x--;
                break;
        }
    }
}



