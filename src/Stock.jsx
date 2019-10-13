import React from 'react';
import PropTypes from 'prop-types';
import './Stock.css';

class Stock extends React.Component {
  /* Display stocks page */
  constructor(props) {
    // Initialize mutable state. TODO fix url props
    super(props);
    this.state = {
      ticker: this.props.ticker,
      data: this.props.data,
      url: `${this.props.url}${this.props.ticker}`
    };
  }

  componentDidMount() {
    this.setState({
      ticker: this.props.ticker,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className = "boxed">
        <tr className="stock" url={this.state.url}>
          <td><a href={this.state.url}>{this.state.ticker}</a></td>
          <td><a href={this.state.url}>{this.state.data}</a></td>
        
        </tr>
        </div>
      </React.Fragment>
      
    );
  }
  
}

export default Stock;
