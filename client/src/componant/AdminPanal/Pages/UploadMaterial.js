import React, { useState, useEffect } from "react";
import Navbar from "../../Nav/Navbar";
import SideBar from "../SideBar";
import { FileUploader } from "react-drag-drop-files";
import "./UploadMaterial.css";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Document, Page } from "react-pdf";
// import PDFViewer from "pdf-viewer-reactjs";
import * as AiIcons from "react-icons/ai";
import axios from "../../../Axios/axios";

// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function UploadMaterial() {
  const fileTypes = ["PDF", "DOC", "PPT", "PPTX"];
  const [file, setFile] = useState([]);

  const [branch, setbranch] = useState();
  const [classes, setclasses] = useState();
  const [subject, setsubject] = useState();
  const [errmsgUploadDocument, seterrmsgUploadDocument] = useState(false);
  const [clickOnSubmit, setclickOnSubmit] = useState(false);
  const [uploadSuccesful, setuploadSuccesful] = useState(false);

  //  uploadPdf
  const handleChangeInput = (f) => {
    var a = Object.values(f);
    console.log(file);
    if (a.length !== 0) {
      setFile((prev) => [...prev, ...a]);
      seterrmsgUploadDocument(false);
    }
  };
  // Delete pdf
  function handleDeletePDF(i) {
    file.splice(i, 1);
    setFile((prev) => [...prev]);
  }
  // useEffect
  useEffect(() => {}, []);

  // Branch
  function handleSelectBranch(e) {
    setbranch(e.target.value);
  }
  // class
  function handleSelectClass(e) {
    setclasses(e.target.value);
  }
  // subject
  function handleSelectSubject(e) {
    setsubject(e.target.value);
  }
  // Submit
  function handleOnSubmit(e) {
    e.preventDefault();
    if (file.length === 0) {
      seterrmsgUploadDocument(true);
    } else {
      console.log(file);
      var bodyFormData = new FormData();
      bodyFormData.append("Branch", branch);
      bodyFormData.append("Classes", classes);
      bodyFormData.append("Subject", subject);
      file.forEach((f) => {
        bodyFormData.append("studyMaterial", f);
      });
      bodyFormData.append("AdminId", localStorage.getItem("admin-id"));
      bodyFormData.append("AdminEmail", localStorage.getItem("admin-email"));
      bodyFormData.append("AdminName", localStorage.getItem("admin-name"));
      bodyFormData.append("Admin", localStorage.getItem("admin"));
      axios
        .post("/uploadStudyMaterial", bodyFormData)
        .then((result) => {
          setclickOnSubmit(true)
          setuploadSuccesful(true)
          setFile([])
          setTimeout(() => {
            setclickOnSubmit(false)
            setuploadSuccesful(false)
          }, 6000);
        })
        .catch((err) => {
          setclickOnSubmit(true)
          setuploadSuccesful(false)
          setTimeout(() => {
            setclickOnSubmit(false)
            setuploadSuccesful(false)
          }, 8000);
        });
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ padding: "20px 50px" }}>
          <h2 style={{textAlign:"center"}}>Upload Study Material</h2>
          <hr />
          <form action="" method="post" onSubmit={handleOnSubmit}>
            <MDBRow>
              {/* <div style={{ width:"100%",display: "flex", justifyContent: "space-between" }}> */}
              <MDBRow>
                <MDBCol>
                  <label htmlFor="cars">
                    Branch <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: "200px" }}
                    onChange={handleSelectBranch}
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="comp">Computer</option>
                    <option value="mech">Mechanical</option>
                    <option value="civil">Civil</option>
                  </select>
                </MDBCol>
                <MDBCol>
                  <label htmlFor="cars">
                    Class <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: "200px" }}
                    onChange={handleSelectClass}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="FE">FE</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                  </select>
                </MDBCol>

                <MDBCol>
                  <label htmlFor="cars">
                    Subject <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ width: "200px" }}
                    onChange={handleSelectSubject}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="DSA">DSA</option>
                    <option value="AI">AI</option>
                    <option value="MI">Ml</option>
                    <option value="CS">CS</option>
                  </select>
                </MDBCol>
              </MDBRow>
              <MDBRow
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "100px",
                }}
              >
                <label htmlFor="">
                  Upload Document <span style={{ color: "red" }}>*</span>
                </label>
                <FileUploader
                  label="Upload or drop a file right here"
                  fileOrFiles
                  hoverTitle="Drop kar"
                  multiple={true}
                  handleChange={handleChangeInput}
                  name="file"
                  dropMessageStyle={{ backgroundColor: "red" }}
                  types={fileTypes}
                />

                {errmsgUploadDocument && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    You forget uploading document
                  </span>
                )}
              </MDBRow>
              {file.length != 0 ? (
                <MDBRow className="py-4" style={{}}>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {file.map((item, i) => {
                      // console.log(item.name);
                      return (
                        <div className="p-1 my-2 mx-2">
                          <span
                            className="p-2"
                            style={{
                              backgroundColor: "#e7ffed",
                              color: "green",
                              borderRadius: "7px",
                              border: "1px solid green",
                            }}
                          >
                            {item.name}
                          </span>
                          <span
                            onClick={() => {
                              handleDeletePDF(i);
                            }}
                          >
                            <AiIcons.AiFillDelete color="red" size={"1.5em"} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </MDBRow>
              ) : (
                ""
              )}
              <MDBRow className="my-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example31"
                    defaultChecked=""
                    required
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </MDBRow>
              {clickOnSubmit &&  <MDBRow style={{}}>
              {uploadSuccesful ?<div
                  class="alert alert-success alert-dismissible fade show border border-success"
                  role="alert"
                >
                  <strong>Upload Successfully</strong> documents uploaded Successfully, If you have more than studyMaterial then please upload.
                </div>:<div
                  class="alert alert-danger alert-dismissible fade show border border-danger"
                  role="alert"
                >
                  <strong>Uploading fail !</strong>, Try again.
                </div>}
              </MDBRow>}
              <MDBRow style={{}}>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Upload Document
                </button>
              </MDBRow>
            </MDBRow>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
