import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoComputed from "./components/TodoComputed";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

/*const initialStatesTodos = [
    { id: 1, title: "Complete online Javascript course", completed: true },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Read for 1 hour", completed: false },
    { id: 5, title: "Pick up groceries", completed: false },
    { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false },
];*/

const initialStatesTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStatesTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    /*const orderTodos = (arrayTodos) => { 
        return arrayTodos.sort((a, b) => {
            if(a.completed === b.completed) {
                return 0;
            }
            if(a.completed) {
                return 1;
            }
            if(!a.completed) {
                return -1;
            }
        });
    };*/

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        ) {
            return;
        }

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-mobile-light bg-contain bg-no-repeat transition-all duration-200 dark:bg-gray-900 dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark">
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                        filter={filter}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center transition-all duration-200 dark:text-gray-500">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
