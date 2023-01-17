import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <Link to="/" className="button">Home</Link>
                <Link to="/create" className="button">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
