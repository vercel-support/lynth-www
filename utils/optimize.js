import React, {Component} from 'react'

class Optimize extends Component {
  render() {
    return (
      <React.Fragment>
        <script src={`https://www.googleoptimize.com/optimize.js?id=` + this.props.optimize_id}/>
      </React.Fragment>
    );
  }
}

export default Optimize;
