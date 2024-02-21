import React,{useEffect, useState} from 'react';
import Header from "./Header"
import Upload from "./Upload"
import LeftPart from "./LeftPart"
import '../MStyle.css';
function Feed(){

    const myStyles = {
        color: 'white',
        backgroundColor:'blue',
        borderRadius: '20px',
      };
    
    const textArea= {
        resize:'none'
    }

    const[count,setCount] = useState(0);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
  
    const onClickHandler = () => {
      setComments((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    };

    useEffect(()=>{
        document.title= `You Clicked ${count} times.`
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    },[])
    

    return(
        <div>
            <Header />
            <LeftPart />
            <Upload />
            <div class="row">
                
            <div className="main-container">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <div class="col">
        <button onClick={onClickHandler} className="comment-button">
          Comment
        </button>
        <button className="like-button" onClick={()=> setCount(count+1)}>Like {count}</button>
      </div>
    </div>
    
    </div>
    </div>
        </div>
    )
}

export default Feed