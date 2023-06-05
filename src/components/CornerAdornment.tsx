const CornerAdornment = ({ size }: { size: number }) => {
    return (
        <div>
            <div
                className={`absolute bg-corner bg-cover w-${size} h-${size} top-0 left-0`}
            />
            <div
                className={`absolute bg-corner bg-cover w-${size} h-${size} top-0 right-0 rotate-90`}
            />
            <div
                className={`absolute bg-corner bg-cover w-${size} h-${size} bottom-0 right-0 rotate-180`}
            />
            <div
                className={`absolute bg-corner bg-cover w-${size} h-${size} bottom-0 left-0 rotate-270`}
            />
        </div>
    );
};
export default CornerAdornment;
