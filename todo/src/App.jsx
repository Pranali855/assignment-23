import React from 'react'
import '../src/App.css'
import data from '../src/data.js'
import { useState } from 'react';
import { ArrowBigRight } from 'lucide-react';
import { ArrowBigLeft } from 'lucide-react';
import toast,{ Toaster } from 'react-hot-toast';


const startIndex = 0;
const endIndex = data.length - 5;
const randomIndex = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;
const quizData = data.slice(randomIndex, randomIndex + 5);


function App() {

  const [quetionIndex, setQuestionIndex] = useState(0);

  const [optionStyle, setOptionStyle] = useState({
    0:{},
    1:{},
    2:{},
    3:{}, 
    4:{},
  });


  const currentQuetion = quizData[quetionIndex];


  const checkAnswer = (selectedOption, idx) => {

    if(selectedOption === currentQuetion.answer){

      toast.success("Correct Answer!");

      setOptionStyle({
        ...optionStyle,
        [idx]:{
          backgroundColor:"green",
          color:"white"
        }
      });

    }else{

      toast.error(`Wrong Answer! The correct answer is: ${currentQuetion.answer}`);

      setOptionStyle({
        ...optionStyle,
        [idx]:{
          backgroundColor:"red",
          color:"white"
        }
      });

    }

  }


  return (
    <>

    <h1 className='app-heading'>Quiz App</h1> 

    <div className="App">

      <p className='text-quetion-number'>
        Question Number: {quetionIndex + 1} / {quizData.length}
      </p>


      <p className='quetion'>
        {currentQuetion.question}
      </p>


      {
        currentQuetion.options.map((option, idx)=>{

          return(

            <div
              key={idx}
              className='option-card'
              onClick={()=> checkAnswer(option, idx)}
              style={optionStyle[idx]}
            >
              {option}
            </div>

          )

        })
      }


      <div className='arrow'>


        <ArrowBigLeft
          size={40}
          className='img-prev-quetion'
          onClick={() => {

            if(quetionIndex > 0){

              setQuestionIndex(quetionIndex - 1);

              setOptionStyle({
                0:{},
                1:{},
                2:{},
                3:{}, 
                4:{},
              });

            }

          }}
        />


        <ArrowBigRight
          size={40}
          className='img-next-quetion'
          onClick={() => {

            if(quetionIndex < quizData.length - 1){

              setQuestionIndex(quetionIndex + 1);

              setOptionStyle({
                0:{},
                1:{},
                2:{},
                3:{}, 
                4:{},
              });

            }else{

              toast.success("Quiz Completed 🎉");

            }

          }}
        />


      </div>


      <Toaster position="top-center"/>

    </div>

    </>
  )

}

export default App