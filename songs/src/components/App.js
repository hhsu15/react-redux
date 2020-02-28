import React from "react";
import { selectSong } from "../actions"; // since we have index.js inside of actions folder, you can do this as shorthand. Webpack will by default pick index.js. Also, this is called "named export" as opposed to "default export"
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
