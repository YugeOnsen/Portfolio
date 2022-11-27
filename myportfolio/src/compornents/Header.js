import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <header>
    <div className='logo'>
        <h3>ポートフォリオ</h3>
    </div>

    <nav>
        <ul>
            <li>
                <Link to='/'>ホーム</Link>
            </li>
            <li>
                <Link to='/tech'>作品</Link>
            </li>
            <li>
                <Link to='/contact'>連絡先</Link>
            </li>
        </ul>
    </nav>
  </header>
  );
}

export default Header