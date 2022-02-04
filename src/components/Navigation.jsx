import { Outlet } from 'react-router-dom';
import { Link, Wrapper} from './Navigation.styled';

const Navigation = () => {
    return (
            <Wrapper>
                <Link to="/home">Home</Link>
                <Link to="/movies">Movies</Link>
                <Outlet />
            </Wrapper>
    );
};

export default Navigation;