import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <header className='Header'>
      <NavLink to='/posts/new' className='HeaderBtn'>Создать пост</NavLink>
    </header>
  )
}

export default Header;