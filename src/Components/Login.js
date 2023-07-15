import React, { useState } from "react";
import { AiOutlineEyeInvisible} from "react-icons/ai";

const Login = () => {
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let [inputvalues, setInputValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    let fullname = inputvalues.fullname.trim();
    let email = inputvalues.email.trim();
    let password = inputvalues.password.trim();
    let confirm = inputvalues.confirm.trim();

    if (!fullname || !email || !password || !confirm) {
      setSuccess("")
      return setError("Error: All the fields are mandatory.");
    } else if (fullname.length < 3 || fullname.length > 30) {
        setSuccess("")
      return setError(
        "Error: Name should be greater than 2 char and less than 30 char"
      );
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        setSuccess("")
      return setError("Error: Enter Valid Email.");
    } else if (password.length < 8 || password.length > 15) {
        setSuccess("")
      return setError(
        "Error: Password should be greater than 7 char and less than 15 char."
      );
    } else if (!(password === confirm)) {
        setSuccess("")
      return setError("Error: Please make sure your password and confirm password match!");
    } else {
      setError("");
      setInputValues({
        fullname: "",
        email: "",
        password: "",
        confirm: "",
      })
      return setSuccess("Successfully Created.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={inputvalues.fullname}
        onChange={(event) =>
          setInputValues({ ...inputvalues, fullname: event.target.value })
        }
      ></input>
      <input
        type="email"
        placeholder="Email Address"
        value={inputvalues.email}
        onChange={(event) =>
          setInputValues({ ...inputvalues, email: event.target.value })
        }
      ></input>
      <div className="password">
        <input
            type="password"
            placeholder="Password"
            value={inputvalues.password}
            onChange={(event) =>
            setInputValues({ ...inputvalues, password: event.target.value })
            }
        ></input>
        <span>
            <AiOutlineEyeInvisible />
        </span>
      </div>
      <div className="password">
        <input
            type="password"
            placeholder="Confirm Password"
            value={inputvalues.confirm}
            onChange={(event) =>
            setInputValues({ ...inputvalues, confirm: event.target.value })
            }
        ></input>
        <span>
            <AiOutlineEyeInvisible />
        </span>
      </div>
      <input className="btn" type="submit" value={"Create Account"}></input>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </form>
  );
};

export default Login;
