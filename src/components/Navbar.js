function Navbar() {
    return(
        <>
            <div className="navbar">
                <div className="navbar-s1">
                    <h1 className="navbar__s1__title">Udemy</h1>
                </div>

                <div className="navbar-s2">
                    <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
                    <input type="text" placeholder="Search for anything here. Tech, Business, Art, ..."></input>
                </div>

                <div className="navbar-s3">
                    <p>Courses</p>
                    <div className="tooltip">
                        <p>My Learning</p>
                        <span className="tooltip__text">You didn't purchase anything yet</span>
                    </div>
                    <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
                    <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
                    <i className="fa-solid fa-user" style={{color: "#000000"}}></i>
                </div>
                
                <div className="navbar-s4">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar