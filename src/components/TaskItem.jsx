import Badge from "./Badge";
import { motion } from "framer-motion";

export default function TaskItem({ task, deleteTask }) {
  return (
    <motion.div
      className="p-1"
      key={task.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between border-b border-gray-100 p-1">
        <div>
          <h1>{task.name}</h1>
          <p className="text-xs text-gray-500">{task.description}</p>
        </div>

        <div>
          Priority:
          <Badge type={task.priority} text={task.priority} />
        </div>

        <div>
          <button
            type="button"
            className="bg-red-500 p-1 rounded-md text-white hover:bg-red-600 transition cursor-pointer text-sm"
            onClick={() => deleteTask(task.id)}
          >
            delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}
