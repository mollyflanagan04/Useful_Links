import React from 'react'
import {Row, Col} from 'react-bootstrap';
import ResourceCard from './ResourceCard';
function DataCard(props) {
  return (
    <Row>
    <Col>
        <ResourceCard link={props.link} delete={props.delete}/>
    </Col>
    </Row>
  )
}

export default DataCard