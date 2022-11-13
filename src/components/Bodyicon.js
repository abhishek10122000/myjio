const Item=({icon,title})=>{
    return(
        <div className="flex flex-col">
            <div className=" w-24 text-center rounded">
                <a className="text-4xl text-blue-900 bg-slate-500  rounded-full px-5 py-4"><i class={`${icon}`}></i></a>
                <h1 className="text- flex mt-10 t">{title}</h1>
            </div>
        </div>
    )
}
const Bodyicon=()=>{
    return(
        <>
            <div className="flex gap-20 justify-center mt-20 ">
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Recharge"/>
                </div>
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Pay Bills" />
                </div>
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Get Jio SIM" />
                </div>
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Port to Jio" />
                </div>
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Get JioFiber" />
                </div>
                <div className="">
                    <Item icon="bi bi-credit-card-2-front-fill" title="Support" />
                </div>
            </div>
            <div className="text-center mt-20">
                <h1 className="text-6xl font-extrabold ">In the spotlight</h1>
                <p className="font-semibold text-lg mt-5">The best deals, new launches, and top-selling products right now.</p>
            </div>
         </>
    )
}
export default Bodyicon;