import { Outlet } from "react-router-dom";
import "./Layout.scss"

function Layout() {
    return (
        <div className="root-layout">
            <header className="layout-container">
                <nav className="nav-layout-container">
                <div className="icon-container">
                    <div className="icon-svg"></div>
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
                    <div className="ticket-btn-container">
                        <button className="content">
                        My Tickets
                        <div>oshhsj</div>
                        </button>
                    </div>
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
  