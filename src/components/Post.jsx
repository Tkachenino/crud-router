import {useHistory} from 'react-router-dom';

const Post = ({id, content}) => {
  let history = useHistory();
  const getPost = () => {
    history.push(`/posts/${id}`)
  };

  return (
    <div className='Post' onClick={getPost}>
      <header className='PostHeader'>
        <div className='PostAvatar' />
        <p>Ivan</p>
      </header>
      <div className='PostText'>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Post;