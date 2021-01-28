import {useState, useEffect} from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])
  
  const getPosts = async() => {
    const resp = await fetch('http://localhost:1113/posts');
    const result = await resp.json();
    setPosts(result)
  }

  return (
    <>
      {posts.map(i => (
        <Post key={i.id} id={i.id} content={i.content}/>
      ))}
    </>
  )
}

export default Posts;