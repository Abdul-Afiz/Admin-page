import { DriveFolderUpload } from "@mui/icons-material";
import NavBar from "../../organism/navbar";
import SideBar from "../../organism/sidebar";
import "./index.scss";

const NewScreen = () => {
  return (
    <div className="new">
      <SideBar />
      <div className="new-container">
        <NavBar />
        <div className="top">
          <div className="">
            <h1>Add New user</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUpload className="icon" />
                </label>
                <input type="file" id="file" className="hidden" />
              </div>

              <div className="form-input">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="john doe" />
              </div>

              <div className="form-input">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder="john doe" />
              </div>
              <div className="form-input">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </div>
              <div className="form-input">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+1 234 567 89" />
              </div>
              <div className="form-input">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="form-input">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Elton St. 16 NewYork" />
              </div>
              <div className="form-input">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewScreen;
