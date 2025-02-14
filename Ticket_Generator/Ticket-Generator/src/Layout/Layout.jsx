import { Outlet } from "react-router-dom";
import "./Layout.scss"
import Logo from "./confirmation_number_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import Arrow from "./arrow_right_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

function Layout() {
    return (
        <div className="root-layout">
            <header className="layout-container">
                <nav className="nav-layout-container">
                <div className="icon-container">
                    <div className="icon-svg">
                        <img src={Logo} alt="Logo icon ticz" />
                    </div>
                    <h4 className="nav-icon-text">ticz</h4>
                </div> 
                <div className="selection-container">
                    <div className="btn-contents">
                        <div className="btn-content-item">Events</div>
                        <div className="btn-content-item">My Tickets</div>
                        <div className="btn-content-item">About Project</div>
                    </div>
                </div>
                <div className="my-ticket-btn">
                <button className="content">
                        <p className="btn-text">MY TICKETS</p>
                        <div className="arrow-svg-icon">
                            <img src={Arrow} alt="arrow-icon-svg" />
                        </div>
                        </button>
                </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
  }
  
  export default Layout;
  