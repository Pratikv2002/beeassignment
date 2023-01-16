import React, { useState } from "react";
import Navbar from "../../componant/Nav/Navbar";
import axios from "../../Axios/axios";
 function Home() {
  const [ques, setquestion] = useState();
  React.useEffect(() => {
    axios.get("/getQuetion").then((response) => {
      console.log(response);
      setquestion(response.data);
    });
  }, []);
  console.log(ques);
  return (
    <div  style={{ }}>
      <Navbar />
      Questions
      <div className="mx-5">
        {ques && ques.map((item, i) => {
          console.log(item);
          return (
            <div>
              <div><h5>{i+1}.{item.Question}</h5></div>
              <div>
                 <input name={item.Question} type='radio'/><label htmlFor="">{item.Option1}</label><br />
                 <input name={item.Question} type='radio'/><label htmlFor="">{item.Option2}</label><br />
                 <input name={item.Question} type='radio'/><label htmlFor="">{item.Option3}</label><br />
                 <input  name={item.Question} type='radio'/><label htmlFor="">{item.Option4}</label><br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
