import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './Home.css';
import Stock from './Stock'
// import { tsConstructorType } from '@babel/types';

class Home extends React.Component {
  /* Display stocks page */
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {
      stocks: {},
    };
  }

  componentDidMount() {
    this.setState({
      url: "http://localhost:3000/",
      stocks: {
        'APPL': 1.00, 
        'CAT': 1.11,
        'SNAP': 2.2,
      },
    });
  }

  render() {
    // let list_of_stocks = this.state.stocks.map((curr_stock) => {
    //       return(
    //         <tr className="stock">
    //             <td>{curr_stock}</td>
    //             <td>1.00</td>
    //         </tr>
    //       );
    //     })
    console.log(this.state.stocks);
    let vals = this.state.stocks;
    console.log(vals);
    let list_of_stocks = Object.keys(vals).map((key, index) => ( 
      <tr ticker={key} className="stock">
        <Stock ticker={key} data={vals[key]} url={this.state.url}></Stock>
        
      </tr>
    ))
    return (
      <React.Fragment>
        <body>
          <ul>
            <li><a href="default.asp"><font color="white">Home</font></a></li>
            <li><a href="news.asp"><font color="white">News</font></a></li>
            <li><a href="contact.asp"><font color="white">Contact</font></a></li>
            <li><a href="about.asp"><font color="white">About</font></a></li>
          </ul>
            <div className = "header">
              <header>Breakout</header>
            </div>
            <div className = "searchBox">
              <input class="searchInput"type="text" name="" placeholder="Search"/>
                <button class="searchButton" href="#">
                  <i class="material-icons">
                      search
                  </i>
                </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <table className="stocks">
              {list_of_stocks}
            </table>
            <div class="example1">
              <h3>Hello Mimi...
              </h3>
            </div>
        </body>
      </React.Fragment>
      
    );
  }
  
}

export default Home;
