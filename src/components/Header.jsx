import IconMoon from "./icons/IconMoon";

const Header = () => { 
    return (
        <header className="container mx-auto px-4 pt-8 text-3xl font-semibold tracking-[.4em]">
            <div className="flex justify-between">
                <h1 className="uppercase text-white">Todo</h1>
                <button>
                    <IconMoon className="fill-red-400" />
                </button>
            </div>
        </header>
    );
}

export default Header;