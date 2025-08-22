import Sidebar from "./Sidebar";
import Header from "./Header";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import ScrollArrow from "./Footer/ScrollArrow";
import {useEffect, useState} from "react";
import Customizer from "./Customizer";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to true for open sidebar
    const location = useLocation();
    
    useEffect(() => {
        // Always add active class to body on component mount
        document.body.classList.add('active');
        
        if (window.location.pathname === "/dashboard/ecommerce") {
            $(function () {
                $('#welcomeCard').modal('show');
            });
        }
    }, []);

    // Update body class when sidebar state changes
    useEffect(() => {
        // Always ensure active class is present regardless of sidebar state
        document.body.classList.add('active');
        
        if (isSidebarOpen) {
            // Sidebar is open, you can add additional classes if needed
            document.body.classList.add('sidebar-open');
        } else {
            // Sidebar is closed, remove sidebar-specific class but keep active
            document.body.classList.remove('sidebar-open');
        }
    }, [isSidebarOpen]);

    // Handle click anywhere on the page to manage sidebar state
    const handlePageClick = (e) => {
        // Check if the click is not on the sidebar or toggle button
        const sidebar = e.target.closest('.vertical-sidebar');
        const toggleButton = e.target.closest('.toggle-semi-nav');
        const headerToggle = e.target.closest('.header-toggle');
        const linkElement = e.target.closest('a');
        
        // Don't close sidebar when clicking on navigation links
        if (linkElement && linkElement.getAttribute('href')) {
            return; // Prevent sidebar from closing when navigating
        }
        
        if (!sidebar && !toggleButton && !headerToggle) {
            // On mobile devices (max width 768px), close sidebar when clicking outside
            // Increased threshold to be more mobile-specific
            if (window.innerWidth <= 768 && isSidebarOpen) {
                setIsSidebarOpen(false); // This will close the sidebar on mobile
            }
        }
    };
    return (
        <div className="app-wrapper default" onClick={handlePageClick}>

         <div className="modal" tabIndex="-1" id="welcomeCard" data-bs-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content welcome-card">

        <div className="modal-body p-0">
          <div className="text-center position-relative welcome-card-content z-1 p-3">
            <div className="text-end">
              <i className="ti ti-x fs-5 text-dark f-w-600" data-bs-dismiss="modal"/>
            </div>
            <h2 className="f-w-600"><span>Welcome !</span>👋 </h2>
            <h6 className="f-s-15 text-dark f-w-500 mx-5"> Start Multipurpose, clean modern responsive bootstrap 5 admin template </h6>

            <div>
              <img src="/assets/images/modals/welcome-1.png" alt="img" className=" img-fluid"/>
            </div>
            <div className="mt-3 mb-4">
              <button type="button" className="btn btn-primary text-white btn-lg" data-bs-dismiss="modal">Let's
                Started <i className="ti ti-chevrons-right"></i> </button>
            </div>
          </div>

        </div>
      </div>
    </div>
         </div>

            {/*-- Menu Navigation starts --*/}
            <Sidebar sidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            {/*-- Menu Navigation ends --*/}

            <div className="app-content">
                {/*-- Header Section starts --*/}
                <Header sidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
                {/*-- Header Section ends --*/}

                {/*-- Body main section starts --*/}
                <main>
                    <Outlet/>
                </main>
                {/*-- Body main section ends --*/}
            </div>

            {/*-- tap on top --*/}
            <ScrollArrow/>

            {/*-- Footer Section starts--*/}
            <Footer/>
            <Customizer/>
            {/*-- Footer Section ends--*/}
        </div>
    );
};

export default Layout;