import React, {useState} from "react"

export default function Button(props) {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(oldState => !oldState)
    }

    return (
        <button
            onClick={handleClick}
        >{open ? "Open" :  "Closed"}</button>
    )
}