import React from 'react'
import Image from 'next/image'

export const Controls = ({ play, pause, back, next, isPlaying}) => {
    return (
        <div className="Controls">
            <Image 
                className="backNext"
                onClick={() => {back()}}
                src={`/icons/controls/back.png`}
                alt="back"
                width={100} height={100}
                objectFit="contain"
            />
            { isPlaying ?
                <>
                    <Image onClick={() => {pause()}}
                        className="image"
                        src={`/icons/controls/pause.png`}
                        alt="pause"
                        width={100} height={100}
                        objectFit="contain"
                    />
                </>
                :
                <>
                    <Image onClick={() => {play()}}
                        src={`/icons/controls/play.png`}
                        alt="play"
                        width={100} height={100}
                        objectFit="contain"
                    />
                </>
            }
            <Image 
                className="backNext"
                onClick={() => {next()}}
                src={`/icons/controls/next.png`}
                alt="next"
                width={100} height={100}
                objectFit="contain"
            />
        </div>
    )
}
