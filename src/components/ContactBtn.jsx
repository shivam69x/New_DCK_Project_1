import React from "react";
export default function ContactBtn() {
  const handleClick = () => {
    // In a real app with react-router-dom, you would use:
    // navigate('/contact');
    alert('Navigate to /contact page');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-[14px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 text-sm font-medium z-50"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
      Live chat
    </button>
  );
}