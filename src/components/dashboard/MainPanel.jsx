import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const MainPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 bg-gray-100"
    >
      <Outlet />
    </motion.div>
  );
};

export default MainPanel;
