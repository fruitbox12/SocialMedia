import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mahdi Social</h3>
          <span className="loginDesc">
            در شبکه اجتماعی ما با دوستانت در سراسر دنیا ارتباط داشته باش
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="ایمیل" className="loginInput" />
            <input placeholder="کلمه عبور " className="loginInput" />
            <button className="loginButton">ورود </button>
            <span className="loginForgot">
              کلمه عبور خود را فراموش کرده اید؟
            </span>
            <button className="loginRegisterButton">
              ساخت حساب کاربری جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
