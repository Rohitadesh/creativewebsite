import Navbar from "./Navbar";

const Layout = ({children}) =>{


    return(
        <div className="h-screen w-screen border border-black">
           <Navbar />
           {children}

        </div>

    )
}

export default Layout;
