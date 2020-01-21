import React from 'react'

function Animaltabs(props) {
    return (
            <button 
                onClick={props.handleClick}
                value={props.name}
            >{props.id === 0 ? props.name : "Chapter " + props.id + ": The " + props.name}</button>
    )
}

export default Animaltabs