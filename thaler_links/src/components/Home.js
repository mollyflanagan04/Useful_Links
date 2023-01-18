import React from 'react'
import './HomeStyles.css'
import Logo from '../images/Atos.png'

import Card from 'react-bootstrap/Card';

function Home() {
  return (
    
<div>
  <div className="jumbotron">
    <div className="container">  
      <img src={Logo} alt='Atos logo'></img>
      <h1>Useful Links & Resources</h1>
      
      
    </div>
  </div>


<section className="supporting">
  <div className="container">
  <Card className='col'>
<Card.Body>
  <Card.Title>Resources and Links</Card.Title>
  <Card.Text>
   View useful links to navigate between resources efficiently.
  </Card.Text>
  <Card.Link href="resource-list">See Resources</Card.Link>
</Card.Body>
</Card>

<Card className='col'>
<Card.Body>
  <Card.Title>Add Resources</Card.Title>
  <Card.Text>
    Add new or missing links and resources to the webpage.
  </Card.Text>
  <Card.Link href="add-resource">Add a New Resource</Card.Link>
</Card.Body>
</Card>
   
  
    </div>
    </section>
    </div>
    


  )
}

export default Home