import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Route";
// import 'bootstrap/dist/css/bootstrap.min.css';  
import 'simplebar-react/dist/simplebar.min.css';
import '../public/assets/css/style.css';
import "./scss/style.scss";
import "./scss/responsive.scss";
import Loader from "./Components/Loader";
import Filter from "./Components/Filter/Filter";
import ErrorBoundary from "./Components/Common/ErrorBoundary";
import useActiveBody from "./hooks/useActiveBody";
import "./utils/bodyActiveManager"; // Import to initialize the body active manager

function App() {
    // Use the custom hook to ensure body always has active class
    useActiveBody();
    
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader/>}>
                <BrowserRouter basename="/">
                    <Routes/>
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
