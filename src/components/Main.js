import React, { Component } from 'react';

class Main extends Component {
    state={
        hello: "Witaj",
        bye: "Żegnaj",
        actual: true,
        display: ""
    }

    handleClick = () => {
        if (this.state.actual) {
        this.setState({
            actual: !this.state.actual,
            display: this.state.hello
        })
        console.log("prawda");
    } else {
        this.setState({
            actual: !this.state.actual,
            display: this.state.bye
        })
        console.log("fałsz");
    }
    }

    render() {
        return (
            <div>
                {this.state.display} {this.props.name}
                <br/><button onClick={this.handleClick}>Zmień</button>
            </div>
        );
    }
}

export default Main;