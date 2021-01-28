const PostIdDefault = ({content, editPost, deletePost}) => { 
  return (
    <div className='Post'>
      <header className='PostHeader'>
        <div className='PostAvatar' />
        <p>Ivan</p>
      </header>
      <div className='PostText'>
        <p>{content}</p>
      </div>
      <footer className='PostFooter'>
        <button className='PostEdit' onClick={editPost}>
          Изменить
        </button>
        <button className='PostDelete' onClick={deletePost}>
          Удалить
        </button>
      </footer>
    </div>
  )
}

export default PostIdDefault;