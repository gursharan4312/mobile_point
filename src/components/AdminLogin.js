import React, { useState } from "react";
import Axios from "axios";

export default function AdminLogin(props) {
  const { adminDetails, setAdminDetails } = props;
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const handelChange = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };
  const handelSubmit = e => {
    e.preventDefault();
    Axios.post("/shop/admin/login", loginInfo).then(results => {
      if (results.data.auth) {
        setAdminDetails({ ...results.data.admin, login: true });
      } else {
        setLoginError(true);
      }
    });
  };
  return (
    <form>
      {loginError ? (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            margin: "1rem 0",
            border: "1px solid red",
            borderRadius: "5px",
            color: "red",
            padding: "0.5rem",
            fontWeight: "bold"
          }}
        >
          Wrong email/password. Please try again
        </div>
      ) : (
        ""
      )}
      <label>
        Email :
        <input
          type="text"
          placeholder="sample@example.com"
          name="email"
          value={loginInfo.name}
          onChange={handelChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          placeholder="*******"
          name="password"
          value={loginInfo.password}
          onChange={handelChange}
        />
      </label>
      <button className="btn" onClick={handelSubmit}>
        Login
      </button>
    </form>
  );
}
