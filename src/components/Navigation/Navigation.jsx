import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Link, Wrapper} from './Navigation.styled';

const Navigation = () => {
    return (
            <Wrapper>
                <Link to="/home">Home</Link>
                <Link to="/movies">Movies</Link>
                <Outlet />
                <Toaster />
            </Wrapper>
    );
};

export default Navigation;