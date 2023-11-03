import React, { useState } from "react";
import AxiosService from "../common/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ForgetPage() {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const ForgetPassword = async (e) => {
    e.preventDefault();
    try {
      let res = await AxiosService.post("/forget", {
        email,
      });
      console.log(res);
      if (res.status === 200) {
        navigate("/");
        toast.success("Link on your Mail");
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" forget-div">
      <form onSubmit={(e) => ForgetPassword(e)}>
        <h2 style={{ color: "white" }}>Enter your Email</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgetPage;
