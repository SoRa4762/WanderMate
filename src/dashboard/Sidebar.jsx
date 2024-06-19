import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { adminSidebar } from "../helper/data";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen sticky top-0 w-64 bg-gray-800 text-white flex flex-col"
    >
      <div className="p-4 text-2xl font-bold">WanderMate</div>
      <nav className="mt-10">
        {adminSidebar.map((item) => (
          <>
            <NavLink
              key={item.id}
              className="block py-2.5 px-4 rounded hover:bg-gray-700 cursor-pointer"
              to={item.to}
            >
              {item.name}
            </NavLink>
          </>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
