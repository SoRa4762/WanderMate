import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold">Total Tours</h2>
          <p className="text-2xl">128</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-2xl">1024</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl">512</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
