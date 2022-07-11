import React, { useState } from "react";

type loginProps = {};

const login: React.FC<loginProps> = () => {
  return (
    <div className="bg-fborange w-full h-screen flex flex-col justify-between">
      <div className="flex justify-center items-center  mx-5 py-40 px-6">
        <div className="flex flex-col items-start content-start -mt-32">
          <img
            className="w-[300px] -ml-7"
            src="facebook-logo.svg"
            alt="facebook logo"
          />
          <h2 className="text-3xl font-normal max-w-[500px] ">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>

        <div className="login-fields">
          <div className="flex flex-col justify-center items-center bg-white gap-4 rounded-xl h-[350px] w-[396px] p-4 shadow-sm">
            <input
              className="w-full h-12 text-base py-3 px-4 outline-none border border-solid border-fbgray rounded-md focus:border-fbblue "
              type="text"
              placeholder="Email address or phone number"
            />
            <input
              className="w-full h-12 text-base py-3 px-4 outline-none border border-solid border-fbgray rounded-md focus:border-fbblue "
              type="password"
              placeholder="Password"
            />
            <button className="bg-fbblue text-white border-none rounded-md text-xl w-full px-4 h-12 font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-fbbluedark ">
              Log In
            </button>
            <p className="text-sm font-normal pt-0 items-center text-center text-fbblue mt-1 mb-2 cursor-pointer hover:underline">
              Forgotten password?
            </p>
            <div className="w-full h-[1px] bg-fbgray"></div>

            <button className="w-[55%]  border-none rounded-md text-base p-4 bg-fbgreen text-white font-semibold mt-2.5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-fbgreendark">
              Create New Account
            </button>
          </div>

          <p className="text-sm text-center font-normal pt-0 items-center mt-6">
            <strong>Create a Page</strong> for a celebrity, brand or business.
          </p>
        </div>
      </div>

      <div className="bg-white w-full h-[200px] py-6 px-[20%] flex flex-col content-start items-start ">
        <div className="flex content-start self-start mb-1">
          <ul className="flex gap-2.5 w-full content-start self-center">
            <li className="list-none text-xs">
              <a href="#">English (UK)</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">বাংলা</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">অসমীয়া</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">हिन्दी</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">العربية</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">中文(简体)</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Bahasa Melayu</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Español</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Português (Brasil)</a>
            </li>
            <li className="list-none text-xs">
              <button className="add-lang">+</button>
            </li>
          </ul>
        </div>
        <div className="w-full bg-fbgray"></div>

        <div className="flex content-start items-center justify-center self-start mb-1">
          <ul className="flex gap-2.5 w-full content-start self-center">
            <li className="list-none text-xs">
              <a href="#">Sign Up</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Login</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Messenger</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Facebook Lite</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Watch</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Places</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Games</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Marketplace</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Sign Up</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Facebook Pay</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Oculus</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Portal</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">Instagram</a>
            </li>
            <li className="list-none text-xs">
              <a href="#">BulletinLocal</a>
            </li>
          </ul>
        </div>

        <p className="text-sm text-[#737373] mt-4">Meta © 2022</p>
      </div>
    </div>
  );
};
export default login;
