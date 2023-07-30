import React from "react"

export default props => {
    const text = props.text
    const style = {
        color: props.color,
    }
    return (
        <div style={style}>{text}</div>
    )
}