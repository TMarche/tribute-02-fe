const CornerAdornment = ({ size }: { size: number }) => {
    const mapSize = (size) => {
        return `${size * 0.25}rem`;
    };

    return (
        <div>
            <div
                style={{ width: mapSize(size), height: mapSize(size) }}
                className={`absolute bg-corner bg-cover top-0 left-0`}
            />
            <div
                style={{ width: mapSize(size), height: mapSize(size) }}
                className={`absolute bg-corner bg-cover top-0 right-0 rotate-90`}
            />
            <div
                style={{ width: mapSize(size), height: mapSize(size) }}
                className={`absolute bg-corner bg-cover bottom-0 right-0 rotate-180`}
            />
            <div
                style={{ width: mapSize(size), height: mapSize(size) }}
                className={`absolute bg-corner bg-cover bottom-0 left-0 rotate-270`}
            />
        </div>
    );
};
export default CornerAdornment;
