import Card from 'react-bootstrap/Card';
import './ResourceCard.css'
import  React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function ResourceCard(props) {

  //HOOK & FUNCTIONS TO HANDLE MODAL POP-UP WINDOW FOR DELETE CONFIRMATION//
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  //
  return (
    <Card className="card_style" id={props.link.id} key={props.link.id}>
      <Card.Header className='title'>{props.link.title}</Card.Header>
      <Card.Link target="_blank" href={props.link.resource}className="resource">{props.link.resource}</Card.Link>
      <Card.Text className="body">{props.link.body}</Card.Text>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>YOU ARE ABOUT TO DELETE</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this link?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={()=> props.delete(props.link.id)}variant="primary">
          Delete
        </Button> 
      </Modal.Footer>
     </Modal>
    </Card>
  )
}

export default ResourceCard