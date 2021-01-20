import React from 'react'
import BoardSquare from './BoardSquare'

export default function Board({board}) {

    function getXPos(i) {
        return i % 8;
    }
    function getYPos(i) {
        return Math.abs(Math.floor(i / 8) - 7);
    }
    function isBlackSquare(i) {
        return (getXPos(i) + getYPos(i)) % 2 === 1;
    }

    function getNotation(i) {
        const letters = ['a','b','c','d','e','f','g','h']
        return `${letters[getXPos(i)]}${getYPos(i) + 1}`
    }

    return <div className="board">
        {board.flat().map((piece, idx) => 
            <div key={idx} className="square">
                <BoardSquare piece={piece} black={isBlackSquare(idx)} position={getNotation(idx)}></BoardSquare>
            </div>
        )}
    </div>
}