import { React,useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddResource.css'


function AddResource(props) {
  const navigate = useNavigate();
  const { title } = useState('');
  const { body } = useState('');
  const { resource } = useState('');
  const resourceRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();

  function submitHandler(event) {
      event.preventDefault();
      const data = {
          title: titleRef.current.value,
          resource: resourceRef.current.value,
          body: bodyRef.current.value
      };
      newResource(data);
      navigate("/resource-list")
  }
  function newResource(data) {
      fetch('http://localhost:3500/resource_links', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
      });
    }
 
  return (
<Form className='form-style' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Website Name</Form.Label>
        <Form.Control value={title} ref={titleRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Link</Form.Label>
        <Form.Control as="textarea" rows={2} type="text" value={resource} ref={resourceRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={2} type="text" value={body} ref={bodyRef} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
</Form>
  )

}


export default AddResource

