import { motion } from "framer-motion";

const Tours = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Tours</h1>
      {/* Content goes here */}
    </motion.div>
  );
};

export default Tours;
