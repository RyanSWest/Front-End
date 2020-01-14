import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const RegLogin = () => {
    
    return (
        <Router>
            <div>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            </div>
        </Router>
    )
}

export default RegLogin;