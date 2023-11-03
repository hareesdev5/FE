import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosService from "../common/ApiService";
import { toast } from "react-toastify";

function index() {
  let [action, setAction] = useState("");
  let [Name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [CPassword, setCPassword] = useState("");
  let navigate = useNavigate();

  let SignUp = async (e) => {
    // console.log("listen");
    e.preventDefault();
    if (CPassword === Password) {
      try {
        let res = await AxiosService.post("/create", {
          Name,
          email,
          Password,
        });
        // console.log(res);
        if (res.status === 201) {
          toast.success("Created Successfull");
          sessionStorage.setItem("token", res.data.token);
          navigate("/home");
        }
      } catch (error) {
        // console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Password not match");
    }
  };

  let SignIn = async (e) => {
    // console.log("responce");
    e.preventDefault();
    try {
      let res = await AxiosService.post("/login", {
        email,
        Password,
      });
      if (res.status === 200) {
        toast.success("Login Successfull");
        sessionStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div
        className={action === "Sign Up" ? "container active" : "container"}
        id="container"
      >
        <div className="form-container sign-up">
          <form onSubmit={(e) => SignUp(e)}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              required
              id="input-icon"
              placeholder="Password"
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirm Password"
              required
              minLength={6}
              onChange={(e) => setCPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={(e) => SignIn(e)}>
            <h1>Sign In</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              className="forget"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/forget");
              }}
            >
              Forget Your Password?
            </a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome</h1>
              <p>
                {" "}
                Set Up your Profile <br /> <br />
                or{" "}
              </p>
              <button
                className="hidden text-light"
                id="login"
                onClick={() => setAction("Sign In")}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>
                {" "}
                Login here....
                <br />
                <br />
                or
              </p>
              <button
                className="hidden text-light"
                id="register"
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
