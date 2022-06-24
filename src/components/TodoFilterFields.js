import React from "react";

const TodoFilterFields = ({
  updateOnlyMe,
  filterCompleted,
  updateFilterCompleted,
  onlyMe,
}) => {
  return (
    <div className="flex gap-x-4 p-4">
      <button
        onClick={updateOnlyMe}
        className="h-10 rounded-2xl bg-blue-600 text-white text-sm px-8"
      >
        Bana ait Todolar
      </button>
      <button
        onClick={() =>
          updateFilterCompleted(
            filterCompleted === "completed" ? false : "completed"
          )
        }
        className="h-10 rounded-2xl bg-blue-600 text-white text-sm px-8"
      >
        Tamamlanmış Todolar
      </button>
      <button
        onClick={() =>
          updateFilterCompleted(
            filterCompleted === "uncompleted" ? false : "uncompleted"
          )
        }
        className="h-10 rounded-2xl bg-blue-600 text-white text-sm px-8"
      >
        Tamamlanmamış Todolar
      </button>
    </div>
  );
};

export default TodoFilterFields;
