import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const QuizResult= ({score, playAgainFn, responses, showButton, showWinnerButton ,lvl, setLevel}) => {

    const nextGame = (
        score.length >= 3 && showButton
            ? <button className="button-third">
                <Link className="link-primary" to={"/quiz/menu"}> Slainte! You unlock a new game </Link>
        </button>
            : null
    );
    const winnerButton = (
      showWinnerButton === true && score.length >=3
      ?   <button className="button-third">
              <Link className="link-primary" to={"/quiz/menu"}> You are a master of the disaster! You rock with whisky! :D
              </Link></button>
    :null
    );

    useEffect(() => {
        console.log(lvl, setLevel, score);
        if(score.length >= 3) {
            setLevel(() => lvl);
        }
    }, []);

    return (
        <div className="score-table">
            <div className="score"> Your result is {score.length} of {responses} questions :)</div>
            <button className="button-secondary" onClick={ e => playAgainFn() }>Let`s play one more time </button>
            {nextGame} {winnerButton}
        </div>
    )
};
export default QuizResult;