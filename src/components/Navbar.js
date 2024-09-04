import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    let location = useLocation();
    // useEffect(() => {

    //     console.log(location.pathname);
    // }, [location]);
    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        // <Link className="navbar-brand" to="/">iNotebook</Link>
        // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        // </button>
        // <div className="collapse navbar-collapse" id="navbarNav">
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
        //             <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} to="/About">About</Link>
        //         </li>


        //     </ul>

        //             <form className="d-flex">
        //                 <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
        //                 <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>

        //             </form>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'black'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color:'white'}} to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} style={{color:'white'}} aria-current="page" to="/">Home</Link>                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} style={{color:'white'}} to="/About">About</Link>
                        </li>


                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-secondary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-secondary mx-2" to="/signup" role="button">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
