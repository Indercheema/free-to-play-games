import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
    return (
        <section className="not-found">
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="not-found-data">
                <div className="not-found-box">
                    <h2>Page Not Found</h2>
                    <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80" />
                    <div>
                        <Link to='/'>
                            <button className="add-btn">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;