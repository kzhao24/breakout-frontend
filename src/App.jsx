import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import StockPage from './StockPage';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:ticker" component={StockPage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;