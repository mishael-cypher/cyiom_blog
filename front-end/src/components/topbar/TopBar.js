import './topbar.css'
import {Link} from 'react-router-dom'

export const TopBar = () => {
    const user = false
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && 'LOGOUT'}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className="topImg" src="https://tse4.mm.bing.net/th?id=OIP.3jkCXNotXcNVA_jqwRZviQHaHa&pid=Api&P=0&w=155&h=155" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    
                )
            }
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
};
