import axios from "../../Axios/axios";
import React, { useState } from "react";
import Navbar from "../../componant/Nav/Navbar";
import { Viewer,Worker  } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export default function StudyMaterial() {
  const [branch, setbranch] = useState();
  const [classes, setclasses] = useState();
  const [subject, setsubject] = useState();
  const [studyMaterial, setstudyMaterial] = useState([]);
  const [pdfFile, setpdfFile] = useState(null);
  const [viewPdf, setviewPdf] = useState(null);

//   plugin
  const newplugin = defaultLayoutPlugin()
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
  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Branch", branch);
    formData.append("Classes", classes);
    formData.append("Subject", subject);
    axios
      .post("/findStudyMaterial", {
        Branch: branch,
        Classes: classes,
        Subject: subject,
      })
      .then((result) => {
        setstudyMaterial(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(studyMaterial);
  }
  const fileType = ["application/pdf"];
  function handlePDFClick(item) {
   console.log(item)
    let selectedFile = item.Material;
    // console.log(selectedFile);
    var blob = new Blob([selectedFile],{type:"application/pdf"})
    // console.log(blob)
    if (selectedFile) {
        // console.log('clicked');
    //   if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e) => {
          setpdfFile(e.target.result);
          setviewPdf(pdfFile);
          console.log(viewPdf);
        };
    //   } else {
        // setpdfFile(null);
        // setviewPdf(null);
    //   }
    } else {
      console.log("please select");
    }
  }
  // console.log(viewPdf)
  return (
    <div>
      <Navbar />

      <div>
        <form action="" method="post" onSubmit={handleOnSubmit}>
          <div
            className="my-3"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div className="my-3">
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
            </div>
            <div className="my-3">
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
            </div>

            <div className="my-3">
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
            </div>
            <div className="my-3">
              <label htmlFor="cars"></label>
              <button className="py-1 px-4 mt-4" style={{}} type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {studyMaterial.length >= 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {studyMaterial.map((item, i) => {
              // console.log(item.name);
              return (
                <div key={item._id} className="p-1 my-2 mx-2">
                  <span
                    onClick={() => handlePDFClick(item)}
                    className="p-2"
                    style={{
                      backgroundColor: "#e7ffed",
                      color: "green",
                      borderRadius: "7px",
                      border: "1px solid green",
                    }}
                  >
                    {item.FileName}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
       {viewPdf ? <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>:""}
        </Worker>
      </div>
    </div>
  );
}
