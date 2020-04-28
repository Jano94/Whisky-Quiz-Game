import React from "react";
import QuizMenuSection from "./quiz_menu_section";


const QuizMenu = ({score, level, setLevel}) => {
    return (
        <>
        <section className="quiz-menu">
            <header className="quiz-header">
                <h1 className="quiz-title"> Choose your quiz:</h1>
            </header>
                <div className="container text-color">
                    <ul className="row">
                        <li className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 quiz-article">
                            <QuizMenuSection setLevel={setLevel} lvl={2} showButtonResult={true}
                                             name={"Beginners"} url={'/quiz/game/1'} isActive={true}/>
                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 quiz-article">
                             <QuizMenuSection setLevel={setLevel} lvl={3} showButtonResult={false}
                                              score={score} name={"Intermediates"} url={'/quiz/game/2'}
                                         isActive={score.length >= 3 &&  level > 1? true : false}/>
                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 quiz-article">
                            <QuizMenuSection setLevel={setLevel} lvl={3} showButtonResult={false}
                                             score={score} name={"Kippers"} url={'/quiz/game/3'}
                                         isActive={score.length >= 3 &&  level > 2 ? true : false}/>
                        </li>


                </ul>
            </div>
        </section>
            </>
    )
};

export default QuizMenu;

