
export function TaskSortInput({ sortBy, setSortBy, direction, setDirection }) {
  const sortByOnChange = (e) => setSortBy(e.target.value)
  const directionOnChange = (e) => setDirection(parseInt(e.target.value))

  return (
    <div className="flex my-2">
      <div className="mr-3 text-md py-1 text-left">Sort Options:</div>
      <select className="w-1/5 bg-gray-700 rounded-md text-md m-0.5 py-1 text-center" value={sortBy} onChange={sortByOnChange}>
        <option value="priority">Priority</option>
        <option value="time">Time</option>
      </select>
      <select className="w-1/5 bg-gray-700 rounded-md text-md m-0.5 py-1 text-center" value={direction} onChange={directionOnChange}>
        <option value="1">Ascending</option>
        <option value="-1">Descending</option>
      </select>
    </div>
  )
}
