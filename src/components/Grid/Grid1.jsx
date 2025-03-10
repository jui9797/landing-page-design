

const Grid1 = () => {
    return (
        <div className="my-10 lg:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[120px]">
                <h3 className="text-2xl text-[#4E4E4E] font-bold">90%</h3>
                <p className="text-xs">of our new clients become permanent</p>
            </div>
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[120px]">
                <h3 className="text-2xl text-[#4E4E4E] font-bold">95%</h3>
                <p className="text-xs">say we are awesome at communication</p>
            </div>
            <div className="rounded-2xl bg-[#F3F3F3] p-6 h-[120px]">
                <h3 className="text-2xl text-[#4E4E4E] font-bold">98%</h3>
                <p className="text-xs">trust us when it comes to their most <br /> complex projects</p>
            </div>
        </div>
    );
};

export default Grid1;