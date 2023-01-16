import React,{useState} from 'react'
import axios from "../../Axios/axios"
import { Link } from 'react-router-dom'

function Signup() {
  const initialState ={ name:'',email: '', password: '',confirmPassword:''}
     
    const [formData, setFormData] = useState(initialState)
    const [passwordMatch, setpasswordMatch] = useState(true);
    const [emailUnique, setemailUnique] = useState(true)

    const handleChange =(e)=> {
        setFormData( {...formData, [e.target.name] : e.target.value} )
       
    }

    function handleSignUpClick (e){
      e.preventDefault();
      if(formData.password===formData.confirmPassword){
        axios.post("/admin/register",{name:formData.name,email:formData.email,password:formData.password})
        .then((result) => {
            console.log("hi",result)
        }).catch((err) => {
            if(err.response.status===409){
               setemailUnique(false)
            }
        });
        setpasswordMatch(true)
      }else{
           setpasswordMatch(false)
      }
        
    }
  return (
    <div>
        <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black m-5" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5 ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Request for the Admin
                </p>
                <form className="mx-1 mx-md-4" onSubmit={handleSignUpClick}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        name='name'
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        name='email'
                        onChange={handleChange}
                        required
                      />
                      {emailUnique?
                          <label className="form-label" htmlFor="form3Example3c">
                          Your Email
                          </label> :<label style={{color:'red'}} className="form-label" htmlFor="form3Example3c">
                          Email Id already exist
                          </label>
                      }
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        name='password'
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                        name='confirmPassword'
                        onChange={handleChange}
                        required
                      />
                      
                      {passwordMatch ? <label className="form-label" htmlFor="form3Example4cd">
                      Confirm password
                      </label>:<label style={{color:'red'}} className="form-label" htmlFor="form3Example4cd">
                      Your password and confirmation password do not match.
                      </label>}
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                      required
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <Link to="#!">Terms of service</Link>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit"  className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                  <div className="text-center">
                <p>
                Have an account? <Link to="/adminLogin">Log in</Link>
                </p>
            </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup