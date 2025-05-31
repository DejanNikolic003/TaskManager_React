import { useState } from "react";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";
import Divider from "./components/Divider";
import Badge from "./components/Badge";
import TaskItem from "./components/TaskItem";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    priority: "high",
  });

  const handleTasks = () => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        name: form.name,
        description: form.description,
        priority: form.priority,
      },
    ]);

    setShowModal(false);
    resetForm();
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const resetForm = () =>
    setForm({ name: "", description: "", priority: "high" });

  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <motion.div className="bg-white min-w-3xl rounded-md shadow-md" layout>
          <div className="flex items-center justify-between p-2">
            <h1 className="text-xl uppercase">Task Manager</h1>
            <button
              type="button"
              className="bg-emerald-500 p-1 rounded-md text-white hover:bg-emerald-600 transition cursor-pointer text-sm"
              onClick={() => setShowModal(true)}
            >
              add
            </button>
          </div>
          <Divider />
          <AnimatePresence>
            {tasks.length === 0 ? (
              <NotFound text="No tasks." />
            ) : (
              tasks.map((task) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {showModal && (
          <Modal
            title="Create Task"
            submitButton="create"
            onClickSubmit={handleTasks}
            setShowModal={setShowModal}
          >
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                name="name"
                className="border border-gray-200 p-1 rounded-md text-sm"
                placeholder="Task name..."
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
              <select
                name="priority"
                id="priority"
                className="border border-gray-200 p-1 rounded-md text-sm"
                value={form.priority}
                onChange={(e) => {
                  setForm({
                    ...form,
                    priority: e.target.value,
                  });
                }}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <textarea
                name="description"
                className="border border-gray-200 p-1 rounded-md text-sm"
                placeholder="Task description..."
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
              />
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
