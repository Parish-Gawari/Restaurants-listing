import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = ({
  confirm,
  confrimToggle,
  currentData,
  editModelHandler,
  setCurrentData,
}) => {
  const handleClose = () => confrimToggle(!confirm);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Restaurant Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="d-flex  flex-column gap-3 p-4 border rounded  shadow-lg mt-4 mx-4">
          <div className="d-flex flex-column">
            <label htmlFor="name">Restaurant Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              className="border rounded p-2"
              value={currentData.name}
              onChange={(e) =>
                setCurrentData({ ...currentData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="address">Restaurent Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              id="address"
              className="border rounded p-2"
              onChange={(e) =>
                setCurrentData({ ...currentData, address: e.target.value })
              }
              value={currentData.address}
              required
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="contact">Restaurent Contact</label>
            <input
              type="text"
              placeholder="Enter Contact"
              id="contact"
              className="border rounded p-2"
              onChange={(e) =>
                setCurrentData({ ...currentData, contact: e.target.value })
              }
              value={currentData.contact}
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={() => editModelHandler(currentData.id, currentData)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
