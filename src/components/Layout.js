import Appcard from "./Appcard";
import Banner from "./Banner";
import Bigcard from "./Bigcard";
import Bodyicon from "./Bodyicon";
import Card1 from "./Card1";
import Header from "./Header";

const Layout=()=>{
    return(
        <div>
            <Header/>
            <Banner/>
            <Bodyicon/>
            <Bigcard/>
            <Card1/>
            <Appcard/>
        </div>
    )
}
export default Layout;