import React, {Component} from 'react';
import Board from "./containers/Board";
import './App.css'
import ScoreBoard from "./containers/Score";

class App extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <div className="outer_all">
                        <ScoreBoard/>
                        <Board/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;