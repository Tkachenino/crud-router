import {useState} from 'react';

const PostIdEdit = ({content, rejectEdit, editPost}) => {
  const [value, setValue] = useState(content);

  const changeValue = ({target: {value}}) => {
    setValue(value);
  }

  const sendPost = (e) => {
    e.preventDefault();
    editPost(value);
  }


  return (
    <div className='NewPost'>
      <header className='NewPostHeader'>
        <div className='PostAvatar' />
        <p>Ivan</p>
        <button className='NewPostClose' onClick={rejectEdit}>X</button>
      </header>
      <div className='NewPostForm'>
        <form className='NewPostForm' onSubmit={sendPost}>
          <textarea className='NewPostField' value={value} onChange={changeValue}/>
          <div className='NewPostFooter'>
           <button className='NewPostBtn'>Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostIdEdit;