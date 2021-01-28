import {useState} from 'react';
import {
  useHistory
} from "react-router-dom";

const NewPost = () => {
  const [value, setValue] = useState('');
  let history = useHistory();

  const changeValue = ({target: {value}}) => {
    setValue(value);
  }

  const addPost = async() => {
    await fetch('http://localhost:1113/posts', {
     method: 'POST',
     body: JSON.stringify(
       {"id": 0,
        "content": value
     })
   })
 }

  const sendPost = (e) => {
    e.preventDefault();
    addPost();
    history.replace('/');
  }

  const closePost = () => {
    history.replace('/');
  }

  return (
    <div className='NewPost'>
      <header className='NewPostHeader'>
        <button className='NewPostClose' onClick={closePost}>X</button>
      </header>
      <div className='NewPostForm'>
        <form className='NewPostForm' onSubmit={sendPost}>
          <textarea className='NewPostField' value={value} onChange={changeValue}/>
          <div className='NewPostFooter'>
           <button className='NewPostBtn'>Опубликовать</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default NewPost;