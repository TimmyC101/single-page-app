import React from 'react'

function Rings(props) {
    return (
    <span className="ring" style={{left: + props.pos + "%"}}>
        <span className="hole-1"></span>
        <span className="hole-2"></span>
    </span>
    )
}

export default Rings;