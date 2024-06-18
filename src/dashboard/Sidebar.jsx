import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-64 bg-gray-800 text-white flex flex-col"
    >
      <div className="p-4 text-2xl font-bold">WanderMate Admin</div>
      <nav className="mt-10">
        <NavLink
          to="/admin/dashboard"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/managehotels"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Hotels
        </NavLink>
        <NavLink
          to="/bookings"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Bookings
        </NavLink>
        <NavLink
          to="/users"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Users
        </NavLink>
        <NavLink
          to="/reviews"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Reviews
        </NavLink>
        <NavLink
          to="/settings"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Settings
        </NavLink>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
