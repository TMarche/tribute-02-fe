const GridLayout = ({
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
}) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {children}
        </div>
    );
};
export default GridLayout;
