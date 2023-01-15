import React from 'react'
import { Link } from 'react-router-dom';
const Fotter = () => {
  return (
  <footer>
    <div className='logo'>
        <h3>連絡先</h3>
    </div>

    <nav>
        <ul>
            <li>
                <Link to='/'>✉b-y_0419@tsuyama.kosen-ac.jp</Link>
            </li>
        </ul>
    </nav>
  </footer>
  );
}

export default Fotter