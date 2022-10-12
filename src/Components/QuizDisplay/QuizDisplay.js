import React from 'react';
import './QuizDisplay.css'
import toast, { Toaster } from 'react-hot-toast';


const QuizDisplay = (param) => {

    //এই পার্টে data object থেকে question,options,correctAnswer কে আলাদা করা হয়েছে

    const { question } = param.data
    let opt = param.data.options.map(param => param)
    let cAnswer = param.data.correctAnswer;

    ////////////////////////

    //এই পার্টে কুইজ অপশন ক্লিক করে দেখা হচ্ছে যে সেটি সঠিক কিনা

    let checker = (params) => {

        if (params === cAnswer) {
            toast.success('Correct Answer')
        }
        else {
            toast.error("Wrong Answer")
        }
    }
    // ///////////////////////////

    //এই পার্টে correctAnswer থেকে সঠিক উত্তর নিয়ে সেটিকে eye icon এর মাধ্যমে toast হিসেবে দেখানো হয়েছে
    let correctAnswer = () => {
        toast(() => (
            <div>
                <span className='font-bold'>Correct Answer: </span> {param.data.correctAnswer}
            </div>
        ));
    }


    return (
        <div>
            <div><Toaster /></div>
            <div className="card w-9/12 mb-8 mx-auto bg-fuchsia-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Question:</h2>
                    <p className='text-xl my-3 font-bold'>{question}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button onClick={(e) => checker(e.target.value)} className='font-medium button text-black p-5 rounded-lg border border-indigo-600' value={opt[0]} >{opt[0]}</button>
                        <button onClick={(e) => checker(e.target.value)} className='font-medium button text-black p-5 rounded-lg border border-indigo-600' value={opt[1]} >{opt[1]}</button>
                        <button onClick={(e) => checker(e.target.value)} className='font-medium button text-black p-5 rounded-lg border border-indigo-600' value={opt[2]} >{opt[2]}</button>
                        <button onClick={(e) => checker(e.target.value)} className='font-medium button text-black p-5 rounded-lg border border-indigo-600' value={opt[3]} >{opt[3]}</button>
                        <br></br>
                        <button onClick={() => correctAnswer()} className="btn-circle">
                            <img src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizDisplay;