import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout';
import HomePage from '../src/pages/Homepage';

import './App.css';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage />}
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
