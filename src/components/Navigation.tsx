import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import CornerAdornment from "./CornerAdornment";

const Navigation = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav className="fixed h-screen bg-paper-pattern bg-paper drop-shadow-xl w-64">
            <CornerAdornment size={10} />
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
