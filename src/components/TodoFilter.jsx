const TodoFilter = ({changeFilter, filter}) => { 
    const classActive = 'text-blue-600 hover:text-gray-500';
    const classInactive = 'text-gray-500 hover:text-blue-600';

    return (
        <section className="container mx-auto mt-5">
            <div className="flex justify-center gap-6 rounded bg-white p-4">
                <button
                  onClick={() => changeFilter('all')}
                  className={`font-bold ${filter === 'all' ? classActive: classInactive}`}>All
                </button>
                <button
                  onClick={() => changeFilter('active')}
                  className={`font-bold ${filter === 'active' ? classActive: classInactive}`}>Active
                </button>
                <button
                  onClick={() => changeFilter('completed')}
                  className={`font-bold ${filter === 'completed' ? classActive: classInactive}`}>Completed
                </button>
            </div>
        </section>
    );
 }

 export default TodoFilter;