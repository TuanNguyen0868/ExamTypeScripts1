import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search } from "../store/action/songAction";

class SearchBar extends Component {
  render() {
    const { search, value } = this.props;

    return (
      <input
        className="form-control"
        placeholder="Search ......"
        onChange={(e) => search(e.target.value)}
        value={value}
      />
    );
  }
}

function mapStateToProps({ listSongFind }) {
  return {
    value: listSongFind?.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
