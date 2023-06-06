import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import CornerAdornment from "./CornerAdornment";

const Navigation = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav className="sm:fixed sm:h-screen bg-paper-pattern bg-paper drop-shadow-xl w-full sm:w-64">
            <div
                className="text-xl p-5 text-center text-white tracking-widest
                bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950
                border-b-4 border-t-4 border-adornment"
            >
                <Link to="/">TRIBUTE</Link>
            </div>
            <div className="flex flex-row justify-around sm:flex-col [&>a]:pt-2 [&>a]:pb-2 [&>a]:pr-5 [&>a]:pl-5 [&>a]:sm:border-b-4 [&>a]:border-adornment [&>a]:border-dotted">
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
