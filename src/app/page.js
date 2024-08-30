"use client";

import { TaskList } from "@/components/TaskList";
import { NewTaskInput } from "@/components/NewTaskInput";
import { useEffect, useState } from "react";
import { TaskSortInput } from "@/components/TaskSortInput";
import { addTask, deleteTask, listTasks } from "@/utils/actions";

export default function Page() {
  const [tasks, setTasks] = useState([])
  const [sortBy, setSortBy] = useState("priority")
  const [direction, setDirection] = useState(1)

  const init = async () => {
    const response = await listTasks();
    setTasks(response.documents)
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) {
      init()
    }
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const addTaskHandler = async (task) => {
    await addTask(task)
    setTasks([...tasks, task])
  }

  const deleteTaskHandler = async (index) => {
    const taskId = tasks[index].$id
    tasks.splice(index, 1)
    setTasks([...tasks])
    if (taskId !== undefined) {
      await deleteTask(taskId)
    }
  }

  return (
    <main className="max-w-[800px] m-auto">
      <h1 className="text-center text-4xl p-6">My Todo App</h1>
      <div className="bg-gray-800 p-4 m-2 rounded-lg">
        <NewTaskInput addTaskHandler={addTaskHandler} />
        <TaskSortInput sortBy={sortBy} setSortBy={setSortBy} direction={direction} setDirection={setDirection} />
        <TaskList actualTasks={tasks} sortBy={sortBy} direction={direction} removeTaskHandler={deleteTaskHandler} />
      </div>
    </main>
  );
}
