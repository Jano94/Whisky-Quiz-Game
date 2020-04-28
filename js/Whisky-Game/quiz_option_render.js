import React, {useState} from "react";

const QuizOption = ({questions, options, selected, back}) => {
    const [answer, setAnswer] = useState(options);

    const handleBack = event => {
        setAnswer(options);
        back();
    };

    const changeAnswerButton = (
       answer.length === 1
           ? <button className="button-third" onClick={handleBack}> Change your answer </button>
           : null
    );


   return  (

       <>
           <div className="quiz-question">
           <h4 className="question"> {questions}</h4>
           {answer.map((choice, index) => (
               <button className="button-secondary" key={index} disabled={answer.length === 1 ? true : false}
                       data-name={choice} onClick={e => {
                           const name = e.target.dataset.name;
                           setAnswer([name]);
                           selected(name);
               }}>
                   {choice}
               </button>
           ))}
               {changeAnswerButton}

           </div>
       </>
   )
};
export default QuizOption;