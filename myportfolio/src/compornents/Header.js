import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <header>
    <div className='logo'>
        <h3>弓削林太郎のポートフォリオ</h3>
    </div>

    <nav>
        <ul>
            <li>
                <Link to='/'>ホーム</Link>
            </li>
            <li>
                <Link to='/tech'>作品</Link>
            </li>
        </ul>
    </nav>
  </header>
  );
}

export default Header