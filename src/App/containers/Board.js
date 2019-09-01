import React, {Component} from 'react';
import Square from "../components/Square";

class Board extends Component {

    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };

    AddMove = (i) => {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    };

    createSquare = (i) => {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.AddMove(i)}
            />
        )
    };

    clear = () => {
        this.setState({
            squares: Array(9).fill(null)
        })

    };

    render() {

        const status = 'Next Player is ' + (this.state.xIsNext ? '1' : '2');
        return (
            <div>
                <div className="status">{status}</div>

                <div className="board-row">
                    {this.createSquare(0)}
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                </div>
                <div className="board-row">
                    {this.createSquare(3)}
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                </div>
                <div className="board-row">
                    {this.createSquare(6)}
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                </div>

                <button onClick={this.clear}>
                    Clear
                </button>
            </div>

        );
    }
}


export default Board
