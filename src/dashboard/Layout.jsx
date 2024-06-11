import Sidebar from "../dashboard/Sidebar";
import MainPanel from "../dashboard/MainPanel";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainPanel />
    </div>
  );
};

export default Layout;
