import { compareAsc } from "date-fns";
import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";

export function TaskList({ actualTasks, sortBy, direction, removeTaskHandler }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasks = actualTasks.map((value, index) => [value, index])

    const prioritySortFn = (a, b) => direction * (a.priority - b.priority)
    const timeSortFn = (a, b) => direction * compareAsc(a.timestamp, b.timestamp)
    tasks.sort((a, b) => sortBy === "priority" ? prioritySortFn(a[0], b[0]) : timeSortFn(a[0], b[0]))

    setTasks(tasks)
  }, [actualTasks, sortBy, direction])

  return (
    <div className="bg-[#2d3746] rounded-lg mt-2 px-1 py-1">
      {
        tasks.length
        ?
        tasks.map((item, index) => {
          return <TaskCard key={index} task={item[0]} removeHandler={() => removeTaskHandler(item[1])} />
        })
        :
        <i className="px-4">Active tasks will appear here...</i>
      }
    </div>
  );
}
