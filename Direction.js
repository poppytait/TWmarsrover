export const DIRECTION = {
    N: (turnLeft) => turnLeft ? DIRECTION.W : DIRECTION.E,
    E: (turnLeft) => turnLeft ? DIRECTION.N : DIRECTION.S,
    S: (turnLeft) => turnLeft ? DIRECTION.E : DIRECTION.W,
    W: (turnLeft) => turnLeft ? DIRECTION.S : DIRECTION.N
}