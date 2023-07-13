import { Droppable, Draggable } from "@hello-pangea/dnd";

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
            <Droppable droppableId="todos">
                {
                    (droppableProvided) => (
                        <div
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                          className="mt-8 overflow-hidden rounded-t bg-white transition-all duration-200 dark:bg-gray-800 [&>article]:p-4">
                            {todos.map((todo, index) => (
                                <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                                    {
                                        (draggableProvided) => (
                                            <TodoItem
                                                todo={todo}
                                                updateTodo={updateTodo}
                                                removeTodo={removeTodo}
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                {...draggableProvided.draggableProps}
                                            />
                                        )
                                    }         
                                </Draggable>    
                            ))}

                            {droppableProvided.placeholder}
                        </div>
                    )
                }
            </Droppable>         
        );
    }
};

export default TodoList;
