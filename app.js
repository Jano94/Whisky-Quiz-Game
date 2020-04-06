import React, {useState} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route} from "react-router-dom";
import LoadingPage from "./js/Loading_Page/loading_page";
import QuizWelcomeMenu from "./js/Quiz-menu/quiz_welcome_menu";
import QuizMenu from "./js/Quiz-menu/quiz_menu";
import QuizGame from "./js/Whisky-Game/quiz_game";
import questArray1 from "./js/Questions_Arrays/questionArrays1";
import questArray2 from "./js/Questions_Arrays/questionArrays2";
import questArray3 from "./js/Questions_Arrays/questionArrays3";
import "./scss/main.scss"

const App = () => {
    const [score, setScore] = useState([]);
    const [level, setLevel] = useState(0);
    return (
        <>
            return <h1>{t('Welcome to React')}</h1>
        <HashRouter>
            <Switch>
        <Route exact={true} path ="/" component={LoadingPage}/>
        <Route path ="/menu" component={QuizWelcomeMenu}/>
        <Route path="/quiz/menu" render={() => <QuizMenu level={level} setLevel={setLevel} score={score} />}/>
        <Route path="/quiz/game/1" render={() =>
            <QuizGame lvl={2} setLevel={setLevel} questionBank={questArray1} showButtonResult={true} title={"Whisky Beginner"} score={score} setScore={setScore}/>}/>
        <Route path="/quiz/game/2" render={() =>
            <QuizGame lvl={3} setLevel={setLevel} questionBank={questArray2} showButtonResult={true} title={"Whisky Intermediate"} score={score} setScore={setScore}/>}/>
        <Route path="/quiz/game/3" render={() =>
            <QuizGame lvl={3} setLevel={setLevel} questionBank={questArray3} showButtonResult={false} showButtonWinner={true} title={"Whisky Professor"} score={score} setScore={setScore}/>}/>
            </Switch>
        </HashRouter>
            </>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));