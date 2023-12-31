const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b bg-white px-4 py-4 transition-all duration-200 dark:bg-gray-800">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button onClick={clearCompleted} className="text-gray-400">
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
