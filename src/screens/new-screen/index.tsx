import { DriveFolderUpload } from "@mui/icons-material";
import { useState } from "react";

import ScreenTemplate from "../../organism/screen template";

import "./index.scss";

type newScreenProps = {
  inputs: Array<{
    id?: number;
    label?: string;
    type?: string;
    placeholder?: string;
  }>;
  title?: string;
};

const NewScreen = ({ inputs, title }: newScreenProps) => {
  const [file, setFile] = useState<FileList | null>();

  return (
    <ScreenTemplate>
      <div className="new">
        <div className="new-container">
          <div className="top">
            <div className="">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL([...file][0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="form-input">
                  <label htmlFor="file">
                    Image: <DriveFolderUpload className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={({
                      currentTarget: { files },
                    }: React.ChangeEvent<HTMLInputElement>) => setFile(files)}
                    className="hidden"
                  />
                </div>
                {inputs.map((input) => (
                  <div className="form-input" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScreenTemplate>
  );
};

export default NewScreen;
