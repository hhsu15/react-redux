import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    console.log(this.props);
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// conect is a react component that we pass some configuration to

// by convention we call this the name mapStateToProps
const mapStateToProps = state => {
  // the state is all the data in the repository

  // this mapStateToProps returns what you will get when you do this.props
  // everytime when the state changes, this will be called
  return { songs: state.songs };
};

// first argument of connect is the mapStateToProps function, second is the action creator function
// The reason we pass the action creator (this case selectSong) into the connect, is that connect wiwill call the "dispatch" function which in turn will update the redux store.
export default connect(mapStateToProps, { selectSong })(SongList); // second argument in conncet() is a short hand for {selectSong: selectSong}
