import { Link } from "react-router-dom";
import CornerAdornment from "./CornerAdornment";

const LinkButton = ({ to, children }: { to: string; children: string }) => {
    return (
        <div className="relative inline-block w-24 bg-paper hover:bg-hover-gradient bg-cover bg-no-repeat bg-center">
            <CornerAdornment size={5} />
            <div className="w-full h-full font-serif bg-paper-pattern flex flex-row">
                <Link className="w-full text-center leading-8" to={to}>
                    {children}
                </Link>
            </div>
        </div>
    );
};
export default LinkButton;
