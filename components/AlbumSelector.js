import React, { useState } from 'react'
import Image from 'next/image'

export const AlbumSelector = ({ setSelectorOpen, selectAlbum, iconColor }) => {

  const [isShowing, setIsShowing] = useState(false)

  const show = () => {
    setIsShowing(true)
  }

  const hide = () => {
      setIsShowing(false)
  }

  return (
    <div className="AlbumSelector" onMouseEnter={() => setSelectorOpen(true)} onMouseLeave={() => setSelectorOpen(false)}>
      { !isShowing ? 
        <div className="selector-hoverable">
            <Image onMouseEnter={() => {show()}}
                src={`/icons/controls/list-${iconColor}.png`} 
                alt="album selector"
                width={50} height={40}
            /> 
        </div>  
      :
        <div className="selector-list" onMouseLeave={() => {hide()}}>
          <ul>
            <li onClick={() => {selectAlbum("the-solo-ep")}}>the solo ep</li>
            <li onClick={() => {selectAlbum("we-were-looking")}}>We Were Looking For Transcendence in the Eyes of Our Lovers</li>
          </ul>
        </div>
      }
    </div>
  )
}
