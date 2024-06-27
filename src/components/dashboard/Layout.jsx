import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

const Layout = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default Layout;
