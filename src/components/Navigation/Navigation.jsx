import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Link, Wrapper} from './Navigation.styled';

export const Navigation = () => {
    return (
            <Wrapper>
                <Link to="/home">Home</Link>
                <Link to="/movies">Movies</Link>
                <hr/>
                <Outlet />
                <Toaster />
            </Wrapper>
    );
};

