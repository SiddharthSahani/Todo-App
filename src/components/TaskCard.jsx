import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export function TaskCard({ task, removeHandler }) {
  const [timestampStr, setTimestampStr] = useState("")

  useEffect(() => {
    const fn = () => {
      const str = formatDistanceToNow(task.timestamp, {addSuffix: true})
      setTimestampStr(str)
    }
    const interval = setInterval(fn, 1000)
    fn()

    return () => {
      clearInterval(interval)
    }
  }, [task.timestamp])

  return (
    <div className="bg-cyan-500 rounded-xl m-2 px-6 py-2 overflow-y-auto flex flex-col">
      <div className="w-full flex">
        <div className="w-10/12 flex flex-col p-0 pr-4">
          <div className="flex">
            <div className="w-1/5 text-2xl font-bold">
              Title:
            </div>
            <div className="text-2xl">
              {task.title}
            </div>
            <div className="ml-auto my-auto">
              {timestampStr !== "" && `Created ${timestampStr}`}
            </div>
          </div>
          <hr className="opacity-40 my-1" />
          <div className="flex">
            <div className="w-1/5 text-xl font-bold">
              Priority:
            </div>
            {
              (task.priority === 1) ? <div className="text-xl text-lime-300">Low</div> :
              (task.priority === 2) ? <div className="text-xl text-orange-300">Medium</div> :
              (task.priority === 3) ? <div className="text-xl text-red-300">High</div> : null
            }
          </div>
          <div className="flex">
            <div className="w-1/5 text-xl font-bold">
              Desc:
            </div>
            <div className="text-ellipsis text-xl">
              {task.description !== "" ?  task.description : <i>No description provided</i>}
            </div>
          </div>
        </div>
        <input type="button" value="X" className="w-2/12 font-extrabold bg-red-500 rounded-md text-lg" onClick={removeHandler} />
      </div>
    </div>
  )
}
