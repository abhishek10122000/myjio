const Item = ({title,body,bodycolor,logo,appsname,appacolor})=>{
    return(
        <div className={`w-1/4 p-4  ${(bodycolor != undefined)? "bg-"+ bodycolor +"-700": "bg-slate-400"}  rounded-2xl mt-4`}>
            <div className="flex h-44">
                <div className="font-bold">
                    <h1 className="text-2xl font-extrabold">{appsname}</h1>
                    <h1>{title}</h1>
                </div>
                <img className="h-20 w-15" src={`${logo}`}/>
            </div>
            <a href="" className="p-2 font-bold bg-orange-800 rounded-full px-3">Learn more</a>
        </div>
    )
}
const Appcard=()=>{
    return(
        <>
            <div className="flex p-2 gap-2">
                <Item appsname="JioMeet" logo="https://lh3.googleusercontent.com/-MHpOIdF4-PI/Xw09c6y2bOI/AAAAAAAAuMk/HsLcs0PVbZYXi5pAl9ZvzQpYTrhsE4ZHgCLcBGAsYHQ/s1600/1594703216902068-0.png"  title="A world-class video conferencing app securely host business meetings and call"/>
                <Item appsname="myJio" logo="https://i.pinimg.com/originals/c5/c2/97/c5c2971506d941b094eefc624fdb1cd8.png"  title="A world-class video conferencing app securely host business meetings and call"/>
                <Item appsname="JioMart" logo="https://i0.wp.com/appedus.com/wp-content/uploads/2020/12/JioMart-App-Review-Appedus.png?fit=1200%2C1200&ssl=1&is-pending-load=1"  title="A world-class video conferencing app securely host business meetings and call"/>
                <Item appsname="JioTv" logo="https://lh3.googleusercontent.com/jI_QAS-2fVDoAp7E0A7yIrj7TjWzaW0fM3U6fYNTVp64isdux1U5s8fFtK3bCOut=w300"  title="A world-class video conferencing app securely host business meetings and call"/>
            </div>
            <div className="flex flex-col  mt-2 ">
                <div className="text-center mt-2"><a className="p-3 px-4 font-bold text-blue-800 rounded-full  border border-black ">View all Apps</a></div>
                <div className="text-center flex place-content-center justify-items-center mt-20  w-1/2 ">
                    <div>
                        <h1 className="text-6xl font-extrabold">Discover new possibilities</h1>
                        <p className="font-semibold text-lg mt-5">Planning a digital transformation for home, business, or personal experiences? You're just a step away.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Appcard;