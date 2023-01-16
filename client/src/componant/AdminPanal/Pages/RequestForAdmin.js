import axios from "../../../Axios/axios";
import React, { useState,useEffect  } from "react";
import SideBar from "../SideBar";
import Navbar from "../../Nav/Navbar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function RequestForAdmin() {
  const [adminRequestData, setadminRequestData] = useState([]);
  const [showAccept, setShowAccept] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [id, setId] = useState()
  // admin Request

  useEffect(() => {
    axios
        .get("/requestForAdmin")
        .then((result) => {
            setadminRequestData(result.data);
        })
        .catch((err) => {
            console.log(err);
        });
},[]);
  
// Accept
   
    const handleCloseAccept = () => setShowAccept(false);
    const handleAcceptAdmin = () => {
      axios.put("/acceptAdminRequest",{id:id})
      .then((result) => {
        
      }).catch((err) => {
        
      });
      setShowAccept(false)
      window.location.reload(false)
    };
    const handleShowAccept = (id) =>{
      setShowAccept(true)
      setId(id)
    } 
// Reject

    const handleCloseReject = () => setShowReject(false);
    const handleRejectAdmin = () => {
      axios.put("/rejectAdminRequest",{id:id})
     
      .then((result) => {
        
      }).catch((err) => {
        
      });
      console.log("here");
      setShowReject(false)
      window.location.reload(false)
    };
    const handleShowReject = (id) => {
      setShowReject(true);
      setId(id)
    } 
  return (
    <>
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{width:"80%",margin:"0px auto"}}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Accept/Reject</th>
                </tr>
              </thead>
              <tbody>
                {adminRequestData.map((requests, i) => {
                  return (
                    <tr key={requests._id}>
                      <th scope="col">{i + 1}</th>
                      <th scope="col">{requests.Name}</th>
                      <th scope="col">{requests.Email}</th>
                      <th scope="col">{requests.Date}</th>
                      <th scope="col" style={{ display: "flex" }}>
                        <button type="button" className=" btn btn-success" onClick={()=>handleShowAccept(requests._id)}>
                          Accept
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          type="button"
                          className="btn btn-danger "
                          onClick={()=>handleShowReject(requests._id)}
                        >
                          Reject
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
         show={showAccept} onHide={handleCloseAccept}>
          <Modal.Header closeButton>
            <Modal.Title>Accept Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to give access</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAccept}>
              Close
            </Button>
            <Button variant="success" onClick={handleAcceptAdmin}>
              Accept
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
         show={showReject} onHide={handleCloseReject}>
          <Modal.Header closeButton>
            <Modal.Title>Reject Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to give acces reject </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReject}>
              Close
            </Button>
            <Button variant="danger" onClick={handleRejectAdmin}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </>
  );
}
