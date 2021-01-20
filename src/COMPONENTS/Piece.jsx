import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd'


export default function Piece({ piece: {type, color} }) {
    const [{ isDragging} ,drag, preview] = useDrag({
        item: { type: 'piece', id: `${type}_${color}` },
        collect: (monitor) => {
            return {isDragging: monitor.isDragging()}
        }
    })
    const pieceImg = require(`../assets/${type}_${color}.png`)
    // a black bishop would be "b_b.png" 

    return (
    <>
    {/* <DragPreviewImage connect={preview} src={pieceImg}/> */}
                {type}_{color}
        <div className="piece-container" ref={drag} style={{opacity: isDragging ? 0 : 1}}>
            {}<img src={pieceImg} className="piece" />
        </div>
    </>)
}