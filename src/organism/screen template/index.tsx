import NavBar from "../navbar";
import SideBar from "../sidebar";

const ScreenTemplate: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className=" h-screen overflow-hidden grid grid-cols-[20%_1fr]">
      <SideBar />
      <div className="h-screen overflow-hidden">
        <NavBar />
        <div className="h-full mb-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ScreenTemplate;
