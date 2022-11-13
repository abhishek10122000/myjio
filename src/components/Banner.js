

const Banner=()=>{
    return(
        <>
            <div className="w-full h-96" style={{backgroundImage: "url('https://www.jio.com/jio-desktop-bg.jpg')"}}>
                <div className="w-1/2 mx-20 p-10 px-20 text-slate-400">
                    <h1 className="text-6xl p- font-extrabold">Get a Jio SIM delivered for Free</h1>
                    <h1 className="font-bold mt-2 p-1">Enjoy 4G connectivity with a world of unlimited experiences and complimentary benefits. </h1>
                    <div className="flex gap-6 mt-10 text-white font-semibold">
                        <a className="p-2 bg-blue-900 px-5 rounded-full">Get Jio SIM</a>
                        <a className="p-2 bg-blue-900 px-5 rounded-full ">Let's celebrate</a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;