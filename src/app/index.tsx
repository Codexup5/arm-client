import './styles/index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Box } from '@mui/material';

import { withProviders } from './providers';

import { useAuthContext } from 'entities/user';

import { Routing } from 'shared/router';

import { Laoyut } from 'widgets';

interface NavigationProps {
    children: React.ReactNode;
}

const App = () => {
    const { isAuthenticated } = useAuthContext();

    const Navigation = ({ children }: NavigationProps) => {
        return <>{isAuthenticated ? <Laoyut>{children}</Laoyut> : children}</>;
    };

    return (
        <Router>
            <Navigation>
                <Box
                    component='section'
                    sx={{
                        m: 3,
                    }}>
                    <Routing isAuthenticated={isAuthenticated} />
                </Box>
            </Navigation>
        </Router>
    );
};

export default withProviders(App);
