import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = React.forwardRef(({ todo, updateTodo, removeTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    const buttonClasses = {
        classCheck:
            "grid place-items-center bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400",
        classUncheck: "inline-block",
    };

    const { classCheck, classUncheck } = buttonClasses;

    return (
        <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-300">
            {/*<button className="inline-block h-5 w-5 flex-none rounded-full border-2">
            </button>*/}
            <button
                onClick={() => updateTodo(id)}
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed ? classCheck : classUncheck
                }`}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 transition-all duration-200 dark:text-gray-400 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>
            <button onClick={() => removeTodo(id)} className="flex-none">
                <IconCross />
            </button>
        </article>
    );
});

export default TodoItem;
