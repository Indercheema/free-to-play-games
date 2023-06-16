import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container flexbox">
                <div className="title">
                    <Link to='/'>
                        <h1>Harry Potter characters</h1>
                    </Link>
                </div>
                <nav className="navmenu">
                    <ul>
                        <li className="mobile-menu"><i class="fa-solid fa-bars"></i></li>
                        <li className="menu underline"><a href="#">Characters</a></li>
                        <li className="menu"><a href="#row">Roles</a></li>
                        <li className="menu"><a href="about.html">Movies</a></li>
                        <Link to='/add-movie'>
                            <button className="add-btn">Add Character</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;