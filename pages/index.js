import React, { useState, useEffect } from 'react'; // TODO: Update readme
import { isBrowser, isMobile } from 'react-device-detect';

import { songsArray } from "../songs-array.js";

import { AlbumSelector } from '../components/AlbumSelector';
import { About } from '../components/About.js';
import { VideoPlayer } from '../components/VideoPlayer';
import { TrackList } from '../components/TrackList';
import { Controls } from '../components/Controls.js';

export default function App() {

  const [currentAlbum, setCurrentAlbum] = useState("the-solo-ep");
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(isBrowser);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.style.background = songsArray[currentTrack].backgroundColor;
  }, [currentTrack])

  const handleSetIsLoaded = (isLoaded) => {
    setIsLoaded(isLoaded);
  }

  const handleSetAboutOpen = isOpen => {
    if ( window.innerWidth < 720 ) {
      setAboutOpen(isOpen);
    }
  }
  const handleSetSelectorOpen = isOpen => {
    if ( window.innerWidth < 720 ) {
      setSelectorOpen(isOpen);
    }
  }

  const selectAlbum = (album) => {
    for ( let i = 0; i < songsArray.length; i++) {
      if (songsArray[i].album === album) {
        selectTrack(i);
        break;
      }
    }
    setCurrentAlbum(album)
  }

  const selectTrack = track => {
    setCurrentTrack(track);
  }

  const getReleaseDate = (track) => {
    return new Date(songsArray[track].releaseDate);
  }
  const isReleased = (track) => {
    return getReleaseDate(track).getTime() < Date.now();
  }

  const play = () => {
    setIsPlaying(true);
  }

  const pause = () => {
    setIsPlaying(false);
  }

  const next = () => {
    if ( currentTrack < songsArray.length - 1 ) {
      setCurrentTrack( currentTrack + 1 )
    } else {
      setCurrentTrack(0)
    }
  }

  const back = () => {
    if ( currentTrack > 0 ) {
      setCurrentTrack( currentTrack - 1 )
    } else {
      setCurrentTrack(songsArray.length - 1)
    }
  }

  return ( 
    <div className="App" >
      { !aboutOpen &&
        <AlbumSelector 
          setSelectorOpen={ handleSetSelectorOpen }
          selectAlbum={ selectAlbum }
          iconColor={ songsArray[currentTrack].iconColor }
        />
      }
      { !selectorOpen &&
        <About
          setAboutOpen={handleSetAboutOpen}
          iconColor={ songsArray[currentTrack].iconColor }
        />
      }
      { isReleased(currentTrack) ? 
        <VideoPlayer 
          vimeoCode={ songsArray[currentTrack].vimeoCode } 
          next={() => next()}
          isPlaying={isPlaying}
          setIsLoaded={handleSetIsLoaded}
        />
      :
        <h2 className={`unreleased ${songsArray[currentTrack].iconColor}`}>
          this song will be released {
            getReleaseDate(currentTrack).toUTCString().slice(0, 16).toLowerCase()
          }
        </h2>
      }
      <div className="bottom-bar">
        <TrackList 
          songsArray={ songsArray }
          selectTrack={ selectTrack }
          currentAlbum={ currentAlbum }
          currentTrack={ currentTrack }
        />
        { isLoaded &&
          <Controls 
            isPlaying={ isPlaying }
            play={ play }
            pause={ pause }
            next={ next }
            back={ back }
          />
        }
      </div>
    </div>
  );
}