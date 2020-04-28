import React from "react";
import {Link} from "react-router-dom";



const QuizMenuSection = ({name, text, url, isActive, score}) => {
const resetScore = () => {
    if(score) {
        score.length = 0;
    }
};
    return (
      <>
          <div className="columns-background">
            <h1 className="columns-text">For {name}</h1>
                <p>{text}</p>
              {isActive && <button className="button-primary" onClick={e => resetScore(score)}>
                  <Link className="link-primary" to={url}> Let`s play a game</Link>
          </button> }
            </div>
          </>
  )
};
export default QuizMenuSection;
