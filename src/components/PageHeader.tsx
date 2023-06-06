const PageHeader = ({ children }: { children: string }) => {
    return (
        <div className="w-full flex flex-row justify-center">
            <div
                className="relative text-5xl drop-shadow-xl text-white font-thin text-center p-5 w-full
                        bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950
                        border-b-4 border-t-4 border-adornment

                    "
            >
                {children}
            </div>
        </div>
    );
};
export default PageHeader;
