import React, { useState } from 'react'

export const TrackList = ({ songsArray, selectTrack, currentAlbum, currentTrack }) => {

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
                        {
                            songsArray.map( ( track, index ) => {
                                if ( track.album === currentAlbum ) {
                                    return <li key={index} onClick={() => {selectTrack(index)}}>{track.name}</li>
                                }
                            }
                            )
                        }
                    </ul>
                </div>
            }
                <div className="display" style={{visibility: !isShowing ? "visible" : "hidden"}} >
                    <p onTouchStart={() => { show() }}>{ songsArray[currentTrack].name }</p>
                </div> 
            
        </div>
    )
}
