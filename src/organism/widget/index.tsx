import { KeyboardArrowUp, Person } from "@mui/icons-material";
import "./index.scss";

const Widget = ({ type }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21312</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          20%
        </div>
        <Person className="icon" />
      </div>
    </div>
  );
};

export default Widget;
