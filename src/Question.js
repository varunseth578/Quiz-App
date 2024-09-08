import React from 'react';

const Question = ({ question, options, handleAnswer, currentQuestion }) => {
  return (
    <div className="p-5 border-b">
      <h2 className="text-xl font-bold mb-4">
        {currentQuestion + 1}. {question}
      </h2>
      <div className="grid gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
