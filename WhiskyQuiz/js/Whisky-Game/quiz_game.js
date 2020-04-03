import React, {Component} from "react"
import QuizOption from "./quiz_option_render";
import QuizResult from "./quiz_result";

class QuizGame extends Component {
    state = {
        questionArray: this.props.questionBank,
        responses: 0,

    };
    checkAnswer = (answer, correctAnswer, questionID) => {
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
        if (answer === correctAnswer /*&& this.state.questionID === this.state.responses.length*/) {
            this.props.setScore(prev => {
                return [...prev, questionID];
            });
            return true;
        }

        return false;

    };
    playAgain = () => {
        this.setState({
            responses: 0
        });


        this.props.setScore(() => []);
    };

    back = (questionID) => {
        if(questionID) {
            const newScore = this.props.score.filter(id => id !== questionID);
            this.props.setScore(() => newScore);
        }

        this.setState(state => {
            return {
                responses: state.responses -1,
            }
        })
    };

    render() {
        console.log(this.props);
        return (
            <>
                <section className="menu-main">
                    <div className="container quiz-box">
                <h1 className="title"> {this.props.title}</h1>
                {this.state.questionArray.length > 0 &&
                this.state.responses < 5 &&
                this.state.questionArray.
                map(({question, answers , correct , questionID }) =>
                    (<QuizOption
                        key={questionID}
                        questions={question}
                        options={answers}
                        selected={answers => this.checkAnswer(answers, correct, questionID)}
                        back={() => this.back(questionID)}
                    />))}

                {this.state.responses === 5 ? (
                    <QuizResult lvl={this.props.lvl} setLevel={this.props.setLevel} showButton={this.props.showButtonResult} showWinnerButton={this.props.showButtonWinner} playAgainFn={this.playAgain}
                                score={this.props.score} responses={this.state.responses}
                    />) : null}
            </div>
                </section>
            </>
        )
    }
}
export default QuizGame;
