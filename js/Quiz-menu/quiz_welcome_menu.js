import React from "react";
import {Link} from "react-router-dom";

const QuizWelcomeMenu = () => {
    return (
        <>
        <section className="menu-main">
            <header className="menu-section text">
            <   h1>Welcome to the Whisky Quiz</h1>
            <   h2>Dear Whisky-Lover</h2>
                <span> I`m glad to see you here. I hope that you will like this game.</span>
                 <p> Let`s checkout your %-knowledge ! :)</p>
                <button className="button-primary"><Link className="link-primary" to="/quiz/menu"> Go to quiz ! </Link> </button>
            </header>
        </section>
            </>
    )
};
export default QuizWelcomeMenu;


