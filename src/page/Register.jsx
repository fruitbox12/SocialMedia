import React from "react";
import "../styles/Register.css";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mahdisocial</h3>
          <span className="loginDesc">
            با دوستانت در سرتاسر دنیا در ارتباط باش
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="نام کاربری" className="loginInput" />
            <input placeholder="ایمیل" className="loginInput" />
            <input placeholder="کلمه عبور" className="loginInput" />
            <input placeholder="تکرار کلمه عبور" className="loginInput" />
            <button className="loginButton">ثبت نام</button>
            <button className="loginRegisterButton">
              حساب کاربری دارید؟ وارد شوید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
