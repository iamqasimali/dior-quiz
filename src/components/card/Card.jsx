import React, { useState } from 'react';
import { Star, Gift } from 'lucide-react';
import { quizdata } from '../../data/quizdata';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Get current quiz data
  const currentData = quizdata[currentIndex];

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const isSubmitDisabled = rating === 0 || selectedAnswer === null;

  const handleSubmit = () => {
    if (!isSubmitDisabled && currentIndex < quizdata.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRating(0);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:h-full">
      <div className="flex flex-col">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <img className="w-full h-auto object-cover md:h-auto" src={currentData.image} alt="Dior Sauvage" />
        </div>
        {/* Content Container */}
        <div className="p-8">
          {currentIndex < quizdata.length - 1 ? (
            <>
              {/* Quiz Content */}
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{currentData.title}</div>
              <p className="mt-4 text-slate-500">{currentData.satisfactionQuestion}</p>
              <div className="mt-4 flex items-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      onClick={() => handleStarClick(star)}
                      className={`cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="ml-4 flex justify-between w-full text-xs text-gray-500">
                  <span>{currentData.ratingLabels.low}</span>
                  <span className="flex-grow text-right">{currentData.ratingLabels.high}</span>
                </div>
              </div>
              <div className="mt-4 text-slate-500">{currentData.usageQuestion}</div>
              <div className="mt-2 space-x-2">
                {currentData.options.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleAnswerClick(answer)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedAnswer === answer ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-700'}`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <button
                className={`mt-4 w-full border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium ${isSubmitDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                disabled={isSubmitDisabled}
                onClick={handleSubmit}
              >
                Envoyer le commentaire
              </button>
            </>
          ) : (
            <>
              {/* Final Message with Gift Icon and SAUVETAGE Button */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-indigo-500">{currentData.title}</h2>
                <p className="mt-4 text-slate-500">{currentData.message}</p>
                <Link
                  to="/checkout"
                  className="mt-4 inline-flex items-center justify-center border border-transparent rounded-md py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Gift size={24} className="mr-2 text-yellow-400" />
                  SAUVETAGE
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
