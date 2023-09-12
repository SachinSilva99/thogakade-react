const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    POS
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#home"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#customers">
                                Customers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#orders">
                                Orders
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#items">
                                Items
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#placeOrder">
                                Place Order
                            </a>
                        </li>
                    </ul>
                    <div className="avatar-container nav-item">
                        <div className="avatar">
                            <img src="assets/img/avatar.png" alt="img" />
                        </div>
                        <h3>Sachin</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
