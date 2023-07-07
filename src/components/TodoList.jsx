import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo, filter }) => {
    if (todos.length === 0) {
        return (
            <div className="mt-8 overflow-hidden rounded-t bg-white p-4 text-center font-bold text-gray-500 transition-all duration-200 dark:bg-gray-800">
                No tasks {filter}
            </div>
        );
    } else {
        return (
            <div className="mt-8 overflow-hidden rounded-t bg-white transition-all duration-200 dark:bg-gray-800 [&>article]:p-4">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        );
    }
};

export default TodoList;
