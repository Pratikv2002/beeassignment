import React, { useState } from "react";
import Navbar from "../../Nav/Navbar";
import SideBar from "../SideBar";
import axios from "../../../Axios/axios"
export default function Dashboard() {
  const initialState = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    // console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignInClick =(e) =>{
    e.preventDefault();
    axios.post("/uploadQuestion",{question:formData.question,option1:formData.option1,option2:formData.option2,option3:formData.option3,option4:formData.option4})

  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>
          <form onSubmit={handleSignInClick}>
            <label htmlFor="">Question</label>
            <input onChange={handleChange} type="text" id="question" name="question" />
            <div>
              <div>
                {" "}
                <label htmlFor="">option 1</label>
                <input
                  type="text"
                  id="option1"
                  name="option1"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="">option 2</label>
                <input
                  type="text"
                  id="option2"
                  name="option2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="">option 3</label>
                <input
                  type="text"
                  id="option3"
                  name="option3"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="">option 4</label>
                <input
                  type="text"
                  id="option4"
                  name="option4"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
                Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
