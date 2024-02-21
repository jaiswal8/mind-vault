import React,{useEffect, useState} from 'react';

const Upload = () => {
    const uploadStyles = {
        height:"20%",
        fontSize:"14pt"
      };
      const photoButton = {
        backgroundColor:"Blue",
        borderRadius:"2px"
      };
      // const row={
      //   float:"left"
      // }
    return(
        <div>
            <div class="row">
            <div class="col"><input type="text" placeholder="What's in your mind?" style={uploadStyles}></input></div>
            <div class="row">
                <div class="col"><button style={photoButton}>Photo</button>
                <button>Video</button></div>
            </div>
            </div>
        </div>
    )
}

export default Upload