import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Navigation = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav className="relative bg-paper-pattern bg-paper drop-shadow-xl w-64">
            <div className="absolute bg-corner bg-cover w-10 h-10 top-0 left-0" />
            <div className="absolute bg-corner bg-cover w-10 h-10 top-0 right-0 rotate-90" />
            <div className="absolute bg-corner bg-cover w-10 h-10 bottom-0 right-0 rotate-180" />
            <div className="absolute bg-corner bg-cover w-10 h-10 bottom-0 left-0 rotate-270" />
            <div className="text-xl p-5 text-center tracking-widest">
                <Link to="/">TRIBUTE</Link>
            </div>
            <div className="flex flex-col [&>a]:pt-2 [&>a]:pb-2 [&>a]:pr-5 [&>a]:pl-5">
                <Link
                    className="hover:bg-hover-gradient-narrow bg-cover bg-center"
                    to="/tributes"
                >
                    Tributes
                </Link>
                <Link
                    className="hover:bg-hover-gradient-narrow bg-cover bg-center"
                    to="/events"
                >
                    Events
                </Link>
                <Link
                    className="hover:bg-hover-gradient-narrow bg-cover bg-center"
                    to="/maps"
                >
                    Maps
                </Link>
                <Link
                    className="hover:bg-hover-gradient-narrow bg-cover bg-center"
                    to="/items"
                >
                    Items
                </Link>
                <Link
                    className="hover:bg-hover-gradient-narrow bg-cover bg-center"
                    to="/games"
                >
                    Games
                </Link>
            </div>
        </nav>
    );
};
export default Navigation;
