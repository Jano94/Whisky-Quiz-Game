import React, { Component } from "react";
import MainMenu from "../Quiz-menu/quiz_welcome_menu";

class LoadingPage extends Component {
    state = {
        progress: 0,
        progressNum: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(
                prevState => {
                    return {
                        progress: prevState.progress + 1,
                        progressNum: prevState.progressNum +1
                    };
                },
                () => {
                    if (this.state.progress === 100 && this.state.progressNum === 100) {
                        clearInterval(this.intervalId);
                    }
                }
            );
        }, 40);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        if (this.state.progress && this.state.progressNum === 100) return <MainMenu/>;
        return (
            <>

                <div className="loading-menu">  </div>
                    <div className="loading-section">
                     {/*   <div className="progress">*/}
                     {/*       <div className="progress-bar"*/}
                     {/*           style={{*/}
                     {/*            width: `${this.state.progress}%`*/}
                     {/*        }}>*/}
                     {/*       </div>*/}
                     {/*</div>*/}
                        <p className="progress-text"> Your whisky percentage has: {this.state.progressNum}%</p>
                    </div>


            </>
        );
    }
}
export default LoadingPage;