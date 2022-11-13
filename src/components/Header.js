const Item=({title})=>{
    return(
        <li><a className="text-white">{title}</a></li>
    )
}
const Header=()=>{
    
    return(
        <div className="flex bg-blue-900">
            <img className="h-16 w-30 p-2 ml-36" src="https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo.png" />
            <ul className="mt-4 mx-14 font-bold flex gap-14">
                <Item title="Mobile"/>
                <Item title="JioFiber"/>
                <Item title="Business"/>
                <Item title="Shop"/>
                <Item title="Apps"/>
                <Item title="Support"/>
            </ul>
            <form>
                <button className="bg-white p-2 rounded-l-3xl "><i class="bi bi-search mx-2"></i></button>
                <input className="mt-3 w-60 p-2 font-bold text-black rounded-r-3xl " placeholder="Search"/>
            </form>
            <a className="mx-10 mt-2 text-white rounded-t-3xl ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-11 h-11">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    )
}
export default Header;