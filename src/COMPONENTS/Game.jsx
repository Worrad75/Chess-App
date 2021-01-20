import React from 'react'
import * as Chess from 'chess.js'
import {BehaviorSubject} from 'rxjs'

const gameInstance = new Chess()

export const gameSubject = new BehaviorSubject({
    board: gameInstance.board(),
    
});

function getXPos(i) {
    return i % 8;
}
function getYPos(i) {
    return Math.abs(Math.floor(i / 8) - 7);
}
function isBlackSquare(i) {
    return (getXPos(i) + getYPos(i)) % 2 === 1;
}

export function move(from, to) {
    console.log(from, to)
    const legalMove = gameInstance.move({from, to})
    if (legalMove) {
        gameSubject.next({board: gameInstance.board()})
    }
}
