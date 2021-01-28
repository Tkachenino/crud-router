import {useState, useEffect} from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import PostIdDefault from './PostId/PostIdDefault';
import PostIdEdit from './PostId/PostIdEdit';

const Post = () => {
  const [editMode, setEditMode] = useState(false);
  const [post, setPost] = useState({content: ''});

  let {id} = useParams();
  let history = useHistory();

  const getPost = async() => {
    // debugger;
    const resp = await fetch(`http://localhost:1113/posts/${id}`);
    if (resp.ok) {
      const result = await resp.json();
      setPost(result);
    } else {
      history.replace('/');
    }
    
  }

  useEffect(() => {
    getPost();
  }, [id]);


  const editPost = async(content) => {
    await fetch('http://localhost:1113/posts', {
      method: 'POST',
      body: JSON.stringify(
        {"id": post.id,
         "content": content
      })
    })
    setPost(prevPost => ({...prevPost, content}))
    setEditMode(false);
   
  }

  const deletePost = async() => {
    const resp = await fetch(`http://localhost:1113/posts/${post.id}`, {
      method: 'DELETE'
    });
    if (resp.ok) {
      history.push('/');
    }
  }

  return (
    <>
    {!editMode && <PostIdDefault content={post.content} editPost={() => setEditMode(true)} deletePost={deletePost}/>}
    {editMode && <PostIdEdit content={post.content} rejectEdit={() => setEditMode(false)}  editPost={editPost}/>}
    </>
  )
}

export default Post;