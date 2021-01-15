import React, { useState } from 'react'
import Image from 'next/image'

export const TrackList = props => {

    const [isShowing, setIsShowing] = useState(false)

    const show = () => {
        setIsShowing(true)
    }

    const hide = () => {
        setIsShowing(false)
    }

    const toggle = () => {
        if (isShowing) {
            setIsShowing(false)
        } else {
            setIsShowing(true)
        }
    }

    return (
        <div 
            className="TrackList"
            onMouseEnter={() => { show() }}>
            { isShowing &&
                <div className="list">
                    <ul 
                        onMouseLeave={() => { hide() }}>
                        {props.songsArray.map( ( song, index ) => <li key={index} onClick={() => {props.selectTrack(index)}}>{song.name}</li>)}
                    </ul>
                </div>
            }
                <div className="display" style={{visibility: !isShowing ? "visible" : "hidden"}} >
                    <p onTouchStart={() => { show() }}>{ props.songsArray[props.currentTrack].name }</p>
                </div> 
            
        </div>
    )
}
