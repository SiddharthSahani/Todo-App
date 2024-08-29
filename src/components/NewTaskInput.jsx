import { useState } from "react"

export function NewTaskInput({ addTaskHandler }) {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskPriority, setTaskPriotity] = useState(1)

  const createTask = () => {
    if (taskTitle === "" || taskTitle === undefined) {
      return
    }

    const task = {
      title: taskTitle.trim(),
      description: taskDescription.trim(),
      priority: taskPriority,
      timestamp: new Date(),
    }

    addTaskHandler(task)
    setTaskTitle("");
    setTaskDescription("");
  }
  
  const titleOnChange = (e) => setTaskTitle(e.target.value)
  const descOnChange = (e) => setTaskDescription(e.target.value)
  const priorityOnChange = (e) => setTaskPriotity(parseInt(e.target.value, 10))

  return (
    <div className="flex">
      <div className="flex flex-col w-10/12 mr-2">
        <input className="bg-gray-700 rounded-md text-md m-0.5 py-1 text-center" type="text" placeholder="Enter task title" value={taskTitle || ''} onChange={titleOnChange} />
        <input className="bg-gray-700 rounded-md text-md m-0.5 py-1 text-center" type="text" placeholder="Enter task description" value={taskDescription || ''} onChange={descOnChange} />
        <select className="bg-gray-700 rounded-md text-md m-0.5 py-1 text-center" value={taskPriority} onChange={priorityOnChange}>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      <input className="bg-green-400 w-2/12 text-3xl font-extrabold rounded-md" type="button" value="+" onClick={createTask} />
    </div>
  );
}
