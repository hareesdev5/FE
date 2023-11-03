import React, { useState } from "react";
import AxiosService from "../common/ApiService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function Reset() {
  let [Password, setPassword] = useState("");
  let [CPassword, setCPassword] = useState("");
  let navigate = useNavigate();

  let ResetPassword = async (e) => {
    e.preventDefault();

    if (Password === CPassword) {
      try {
        let id = window.location.pathname.split("/");
        let _id = id[id.length - 1];
        // console.log(_id);
        let user = await AxiosService.put(`/reset/${_id}`, {
          Password,
        });
        if (user.status === 200) {
          toast.success("Password Update Successfully");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Password not match");
    }
  };
  return (
    <div className=" forget-div">
      <form onSubmit={(e) => ResetPassword(e)}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reset;
