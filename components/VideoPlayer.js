import React from 'react';
import ReactPlayer from 'react-player';

export const  VideoPlayer = ({ source, isPlaying, setIsLoaded, next, vimeoCode }) => {

    return (
        <div className="player">
            <ReactPlayer 
                url={`https://vimeo.com/${vimeoCode}`} 
                config={{
                    vimeo: {
                        playerOptions: { controls: false }
                    },
                  }}
                playing={isPlaying}
                onReady={setIsLoaded}
                onEnded={() => next()}
            />
        </div>
    );
}