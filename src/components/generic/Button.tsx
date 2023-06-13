import CornerAdornment from "./CornerAdornment";

const Button = ({
    onClick,
    children,
}: {
    onClick?: () => void;
    children?: string | JSX.Element | JSX.Element[];
}) => {
    return (
        <div className="relative inline-block w-24 bg-paper hover:bg-hover-gradient bg-cover bg-no-repeat bg-center">
            <CornerAdornment size={5} />
            <button
                className="w-24 h-8 font-serif bg-paper-pattern"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};
export default Button;
