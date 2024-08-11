import '../css/Navbar.css';

export default function Navbar() {
    return (
        <>

            <nav className='navbars aligns-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="nav_logo ">
                                <img src="../images/nav_logo.png" alt="Company Logo" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <h3 className='logo'>LOGO</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="nav_icon">
                                <i className="fa-solid fa-magnifying-glass" aria-label="Search"></i>
                                <i className="fa-regular fa-heart" aria-label="Wishlist"></i>
                                <i className="fa-solid fa-cart-shopping" aria-label="Cart"></i>
                                <i className="fa-solid fa-user" aria-label="User Profile"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <section className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link active mx-4" href="#">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </section>

            <section className="border_line">

            </section>

            <section className='discover'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="discover_product">
                                <h1>DISCOVER OUR PRODUCTS</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> Impedit libero at doloribus porro iste dolorem<br /> explicabo voluptate voluptatibus dolores nisi? Voluptas, in architecto.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </>
    );
}
