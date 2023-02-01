import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export const BootstrapModal = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleModal = () => {
    setShow(false);
    props.showfalse(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleModal} className="all-modal">
        <Modal.Header closeButton>{props.title}</Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>from footer</Modal.Footer>
      </Modal>
    </>
  );
};
