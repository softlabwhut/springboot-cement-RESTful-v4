import React, { Component } from 'react';

import Iheader from './component/Iheader';
import Ibody_hero from './component/Ibody_hero';
import Ibody_survey from './component/Ibody_survey';
import Ibody_share from './component/Ibody_share';
import Ibody_about from './component/Ibody_about';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="all">
        <div className="head">
          <Iheader/>
        </div>
        <div className="body">
					<Ibody_hero />
		      <Ibody_survey/>
					<Ibody_share />
					<Ibody_about />

        </div>
      </div>
    );
  }
}

export default App;
