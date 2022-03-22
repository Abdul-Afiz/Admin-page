import {
  ChatBubble,
  DarkMode,
  Fullscreen,
  Language,
  List,
  Notifications,
  Search,
} from "@mui/icons-material";

import "./index.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            English
            <Language className="icon" />
          </div>
          <div className="item">
            <DarkMode className="icon" />
          </div>
          <div className="item">
            <Fullscreen className="icon" />
          </div>
          <div className="item">
            <Notifications className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubble className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <List className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
