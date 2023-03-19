import React from 'react'

const ThankyouPage = () => {
  return (
    <div class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold mb-4 text-center">
        Thank You for Filling the Form
      </h1>
      <a
        href="/"
        class="bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-500 hover:to-pink-600 transition-colors duration-300 ease-in-out"
      >
        Go Home
      </a>
    </div>
  );
}

export default ThankyouPage;