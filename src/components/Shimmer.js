const Shimmer = () => {
    return (
    <>
        <div className="flex flex-wrap">
        {Array(15).fill("").map((e, index) =>
        <>
        <div className="">
            <div key={index} className="w-36 h-56 bg-gray-200 mx-20 my-6"></div>
            <div key={index} className="w-20 h-5 bg-gray-200 mx-20 mb-8"></div>
        </div>
        </>
        )}</div>
    </>
    )
};

export default Shimmer;