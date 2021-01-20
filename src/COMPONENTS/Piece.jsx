import React from 'react'
import useDrag from 'react-dnd'


export default function Piece({ piece: {type, color} }) {

    const pieceImg = require(`../assets/${type}_${color}.png`)
    // a black bishop would be "b_b.png" 

    return (
    <div className="piece-container">
        {}<img src={pieceImg} className="piece" />
    {type}_{color}.png
    </div>)
}