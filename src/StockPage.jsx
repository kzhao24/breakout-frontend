import React from 'react';
import PropTypes from 'prop-types';
// import './StockPage.css';

class StockPage extends React.Component {
  /* Display StockPages page */
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {
      ticker: this.props.match.ticker
    };
  }

  componentDidMount() {
    let fetchUrl = "http://localhost:8000/?stock=" + this.state.ticker
    
    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        if (localStorage.getItem('refresh_token') !== null){
            localStorage.setItem('refresh_token', data.refresh_token)
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('token_type', data.token_type)
            localStorage.setItem('expires_in', data.expires_in)
        }
        this.setState({
            playlists: data.playlists,
        });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>Hello World</div>
        
      </React.Fragment>
      
    );
  }
  
}

export default StockPage;
