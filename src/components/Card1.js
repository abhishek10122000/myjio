const Item=()=>{
    return(
        <>
            <div className=" shadow-xl h-96 rounded-3xl" style={{ backgroundImage: "url('https://www.jio.com/saavnpro-13july2022.jpg')", width: "380px"}}>
                <div className="bg-blue-800 h-80 mt-52 rounded-3xl" style={{borderTopLeftRadius: "45%  20%" ,borderTopRightRadius: "45%  20%", marginTop: ""}} >
                    <div className="pt-20 px-10 ">
                        <a className="bg-slate-200 p-2 rounded-xl text-sm text-blue-800 font-semibold">JIOSAWAN PRO</a>
                        <h1 className="text-3xl mt-3 font-extrabold text-white">Uninterruppted, ad- free music!</h1>
                        <p className="text-slate-300 font-bold mt-2">Top songs, nulimited downlodes,
                            exclusives, JioTunes, and more.
                        </p>
                        <div className="mt-6">
                            <a className="bg-slate-400 p-2 px-4 rounded-full font-semibold ">Try JioSaavan Pro</a>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

const Card1=()=>{
    return(
        <>
            <div className="flex   gap-4 mt-10 mx-36 px-20">
                
                    <Item/>
                
                    <Item/>
                
                    <Item/>
                
            </div>
            <div className="text-center mt-52">
                <h1 className="text-6xl font-extrabold ">Enrich your digital life</h1>
                <p className="font-semibold text-2xl px-36 text-slate-500 mt-5">Stream , shop, connect, and do much more on the go with Jio apps and services.</p>
            </div>
            <div className="flex mt-10">
                <div className="w-2/5 bg-yellow-600 p-20 px-32 flex flex-col">
                       
                    <div>
                        <a className="p-2 px-3 font-bold rounded-full text-white bg-zinc-500">Reliance Jewels</a>
                    </div>
                            <h className="text-4xl font-extrabold mt-6">Top off your Diwali look with the royal Maharashtrian jewels</h>
                    <div className="mt-7">
                        <a href="" className="font-bold p-3 rounded-full text-white bg-blue-800">Explore the Mahalaya collection</a>
                    </div>
                        
                </div>
                <div className="w-3/5">
                    <img className="" style={{height: "430px",width: "1000px"}} src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323725_1100-1100x628.jpg"></img>
                </div>
            </div>
        </>
    )
}
export default Card1