import React, {Component} from 'react';

class Player extends Component {
    state = {
        score: 0
    };

    increment = () => {
        this.setState({
            score: this.state.score + 1
        })
    };

    decrement = () => {
        if (this.state.score !== 0) {
            this.setState({
                score: this.state.score - 1
            })
        }
    };

    render() {
        return (
            <div className="outer">

                {this.state.score}

                <p>Player Number: {this.props.number} </p>
                <button onClick={this.increment}>
                    +
                </button>

                <button onClick={this.decrement}>
                    -
                </button>

            </div>
        );
    }
}

export default Player;
