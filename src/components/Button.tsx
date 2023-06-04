const Button = ({
    onClick,
    children,
}: {
    onClick?: () => void;
    children?: string | JSX.Element | JSX.Element[];
}) => {
    return (
        <div className="relative inline-block w-24 bg-paper hover:bg-hover-gradient bg-cover bg-no-repeat bg-center">
            <div className="absolute bg-corner bg-cover w-5 h-5 top-0 left-0" />
            <div className="absolute bg-corner bg-cover w-5 h-5 top-0 right-0 rotate-90" />
            <div className="absolute bg-corner bg-cover w-5 h-5 bottom-0 right-0 rotate-180" />
            <div className="absolute bg-corner bg-cover w-5 h-5 bottom-0 left-0 rotate-270" />
            <button
                className="w-24 h-8 font-serif bg-paper-pattern "
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};
export default Button;
