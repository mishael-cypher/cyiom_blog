import './topbar.css'

export const TopBar = () => {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://tse4.mm.bing.net/th?id=OIP.3jkCXNotXcNVA_jqwRZviQHaHa&pid=Api&P=0&w=155&h=155" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
};
