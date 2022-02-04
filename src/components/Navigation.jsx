import { Outlet, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;