import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quizData = useLoaderData();
  const {name, questions, total, id} = quizData.data;
let count = 0;

const handleAnswer = (option) => {
    const correctAns = questions.find(quis => quis.correctAnswer === option)
    if(correctAns){
        
    }
    else {
        
    }
}

  return (
    <div className="px-4 lg:w-1/2 mx-auto my-10 ">
        <h1 className="text-2xl mb-4 font-bold font-sans text-center text-violet-500">Simple {total} Questions of {name}</h1>
      {questions.map((quiz) => {
        // console.log(quiz);
        
        return (
          <div key={quiz.id} className='bg-slate-300 p-4 my-8 shadow-lg rounded-lg'>
            
            <div>
            <h2 className="text-xl font-bold"><span className="mr-2">{count = count + 1}.</span>{quiz.question} </h2>
            </div>
           

            <div>
              {quiz.options.map((option, idx) => (

                <div onClick={()=> handleAnswer(option)} value={option} key={idx} className='bg-green-300 p-4 my-5 rounded-lg'>
                  <input className="cursor-pointer" type="radio" name="drone" id={option} value={option}/>
                    <label className="font-semibold ml-2 cursor-pointer" htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
