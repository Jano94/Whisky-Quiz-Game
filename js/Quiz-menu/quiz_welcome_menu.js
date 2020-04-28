import React from "react";
import {Link} from "react-router-dom";

const QuizWelcomeMenu = () => {
    return (
        <>
        <section className="menu-main">
            <header className="menu-section">
                <h1 className="title-primary">Welcome to the Whisky Quiz</h1>
                <h2 className="title-secondary">Dear Whisky-Lover</h2>
                <span className="text">I`m glad to see you here. I hope that you will like this game.</span>
                <p className="text"> Let`s check out your %-knowledge! :)</p>
                <button className="button-primary"><Link className="link-primary" to="/quiz/menu"> Go to the quiz ! </Link> </button>
            </header>
        </section>
            </>
    )
};
export default QuizWelcomeMenu;


