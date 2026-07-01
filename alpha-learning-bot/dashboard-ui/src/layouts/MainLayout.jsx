import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout({children}){

    return(

        <div className="layout">

            <Sidebar/>

            <div className="content">

                <Header/>

                {children}

            </div>

        </div>

    );

}
