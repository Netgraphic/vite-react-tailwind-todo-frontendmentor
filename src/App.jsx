import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8 text-3xl font-semibold tracking-[.4em]">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white">Todo</h1>
                    <button><MoonIcon className="fill-red-400" /></button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-sm text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-300">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4">
                        <span className="text-grey-400">5 items left</span>
                        <button className="text-grey-400">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-5 px-4">
                <div className="bg-white p-4 rounded flex justify-center gap-6">
                    <button className="text-blue-600 font-bold">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8">Drag and drop to reorder list</p>
        </div>
    );
};

export default App;
