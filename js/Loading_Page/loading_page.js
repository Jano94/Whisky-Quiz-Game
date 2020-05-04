import React, { Component } from "react";
import MainMenu from "../Quiz-menu/quiz_welcome_menu";

class LoadingPage extends Component {
    state = {
        progressNum: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(
                prevState => {
                    return {
                        progressNum: prevState.progressNum +2
                    };
                },
                () => {
                    if ( this.state.progressNum === 100) {
                        clearInterval(this.intervalId);
                    }
                }
            );
        }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        if ( this.state.progressNum === 100) return <MainMenu/>;
        return (
            <>
                <section className="loading-section">
                    <div className="loading-background">
                        <div className="loading-menu">  </div>
                        <div className="loading-article"> </div>
                    <p className="progress-text"> Your whisky percentage has: {this.state.progressNum}%</p>
                    </div>
                </section>
            </>
        );
    }
}
export default LoadingPage;