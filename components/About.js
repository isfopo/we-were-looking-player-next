import React, { useState } from 'react'
import Image from 'next/image'

export const About = ({ setAboutOpen, iconColor}) => {

    const [isShowing, setIsShowing] = useState(false)

    const show = () => {
        setIsShowing(true)
    }

    const hide = () => {
        setIsShowing(false)
    }

    return (
        <div onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
        { isShowing ?
            <div className="About" onMouseLeave={() => {hide()}}>
                <div className="symbols">
                    <Image 
                        className="icon"
                        onMouseEnter={() => {show()}}
                        src={`/icons/${iconColor}/symbols/sound.png`} 
                        alt="sound icon"
                        width={100} height={100}
                    /> 
                    <Image 
                        className="icon"
                        src={`/icons/${iconColor}/symbols/shape.png`}
                        alt="shape icon"
                        width={100} height={100} 
                    />
                    <Image 
                        className="icon"
                        src={`/icons/${iconColor}/symbols/place.png`}
                        alt="place icon"
                        width={100} height={100}
                    />
                    <Image 
                        className="icon"
                        src={`/icons/${iconColor}/symbols/memory.png`}
                        alt="memory icon"
                        width={100} height={100}
                    />
                </div>
                <h1 
                    className={`bio ${iconColor}`}
                >
                    sound // shape // place // memory
                </h1>
                <div className="artistImage">
                    <Image
                        src="/images/artistImage.png" 
                        alt="Isaac Poole"
                        width={500} height={500}
                        objectFit="contain"
                    />
                </div>
                <div className="links">
                    <a href="mailto isaacpoolemusic@gmail.com">
                        <Image
                            className="icon"
                            src={`/icons/${iconColor}/links/email.png` }
                            alt="email"
                            width={100} height={100}
                        />
                    </a>
                    <a href="https://open.spotify.com/artist/7CbCnenFpsEyCKXZCOTJBy" target="_blank" rel="noopener noreferrer">
                        <Image 
                            className="icon"
                            src={`/icons/${iconColor}/links/spotify.png` }
                            alt="spotify"
                            width={100} height={100}
                        />
                    </a>
                    <a href="https://theseelementscombined.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            className="icon"
                            src={`/icons/${iconColor}/links/bandcamp.png` }
                            alt="bandcamp"
                            width={100} height={100}
                        />
                    </a>
                    <a href="https://www.instagram.com/theselmntscmbnd/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            className="icon"
                            src={`/icons/${iconColor}/links/instagram.png` }
                            alt="instagram"
                            width={100} height={100}
                        />
                    </a> 
                </div>
            </div> 
            : 
            <div className="hoverable">
                <img onMouseEnter={() => {show()}}
                    src={`/icons/${iconColor}/symbols/sound.png`} 
                    alt="sound icon"
                    width={100} height={100}
                /> 
            </div>
            }
        </div>
    )
}
