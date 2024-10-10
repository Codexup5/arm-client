import { BrowserRouter as Router } from 'react-router-dom';

import { Laoyut } from 'widgets';
import './styles/index.css';

import { MuiTheme } from 'shared';

export const App = () => {
    return (
        <Router>
            <MuiTheme>
                <Laoyut>
                    <h1>Hello World!</h1>
                </Laoyut>
            </MuiTheme>
        </Router>
    );
};
