import React, { useState } from "react";
import "./App.css";

export default function HiddenPlaylist() {
    const pressed = [];
const secretCode = 'samjam';
let [playlist, setPlaylist] = useState(false);

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('You found my hidden playlist! Nice!')
   setPlaylist(true);
  }
});
if(playlist) {
 return(<div>
   <div className="playlist-wrapper"></div>
   <h2>You found my secret playlist! Nice!</h2>
       <iframe src="https://open.spotify.com/embed/album/4uG8q3GPuWHQlRbswMIRS6?si=HvL3B0KJTe6DeYggflcXAw" width="300" height="380" frameBorder="0"
    allowtransparency="true" allow="encrypted-media" className="playlist" title="hidden-playlist"></iframe>
    </div>);
} else {
  return <div></div>
}
    
} 