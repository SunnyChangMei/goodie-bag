import React from 'react';
// import { SingleCandy } from './SingleCandy';
import { getAllCandies } from '../reducers';
import { connect } from 'react-redux';

class CandiesList extends React.Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    return (
      <div>
        <h2>Candies</h2>
        <ul className="container">
          {this.props.candies.map(candy => (
            <div key={candy.id}>
              <h4>{candy.name}</h4>
              <img src={candy.imageUrl} alt="" />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.allCandies
});

const mapDispatchToProps = dispatch => ({
  getAllCandies: () => dispatch(getAllCandies())
});

export default connect(mapStateToProps, mapDispatchToProps)(CandiesList);

/**
 * <h2 className="section-title">Candies</h2>
        <ul className="container">
          {this.props.candies.map(candy => (
            <div className="card" key={candy.id}>
              <Candy candy={candy} />
            </div>
          ))}
        </ul>
 */
