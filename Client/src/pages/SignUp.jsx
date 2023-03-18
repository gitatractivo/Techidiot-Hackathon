import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-5/6 mx-auto h-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-10 p-10"
          >
            <h2 className="text-center font-serif text-pink-500">
              SIGN~UP
            </h2>
            <p className="my-1">
              <input
                type="text"
                placeholder="ENTER FIRSTNAME"
                required
                name="firstName"
                onChange={handleChange}
                className="px-6 py-3 border outline-none border-cyan-500 focus:border-pink-400"
              />
            </p>
            <p className="my-1">
              <input
                type="text"
                placeholder="ENTER LASTNAME"
                required
                name="lastName"
                onChange={handleChange}
                className="px-6 py-3 border outline-none border-cyan-500 focus:border-pink-400"
              />
            </p>
            <p className="my-1">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                name="email"
                required
                onChange={(e) => handleChange(e)}
                className="px-6 py-3 outline-none border border-cyan-500 focus:border-pink-400"
              />
            </p>
            <p className="my-1">
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                required
                name="password"
                onChange={handleChange}
                className="px-6 py-3 border outline-none border-cyan-500 focus:border-pink-400"
              />
            </p>
            <button className="py-2 px-4 border rounded-xl bg-pink-400 w-full text-center text-white font-bold hover:bg-pink-300 hover:text-black">
              Submit
            </button>
          </form>
          {/* for social media */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
