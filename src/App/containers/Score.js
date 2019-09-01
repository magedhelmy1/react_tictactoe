import React, {Component} from 'react';
import Player from "../components/Player";

class ScoreBoard extends Component {



    render() {
        return (
            <div className="rowC">

                <Player number="1"/>
                <Player number="2"/>

            </div>
        );
    }
}

export default ScoreBoard;