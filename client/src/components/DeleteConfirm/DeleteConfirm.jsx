import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteConfirm = ({
  confirm,
  confrimToggle,
  modalDeleteHandler,
  currentId,
}) => {
  const handleClose = () => confrimToggle(!confirm);

  return (
    <>
      <Modal show={confirm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => modalDeleteHandler(currentId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirm;
