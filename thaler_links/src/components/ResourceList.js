import {React, useEffect, useState} from 'react'
import {CardGroup, Container} from 'react-bootstrap';
import SearchBar from './SearchBar';
import DataCard from './DataCard';
import './ResourceCard.css'

function ResourceList() {

  const [resourceList,setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    const search = (value) => {
    const details = value.title;
    return details.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleSearch = (event) => (setSearchTerm(event));
  
  ///*RETRIEVES DATA FROM JSON FILE USING FAKE RESTful API*///
  const getData=()=>{
    fetch('http://localhost:3500/resource_links'
    ,{
      
    } 
    ).then(response => {
      if(!response.ok){
          throw Error('Could not get data for that resource.');  // TEST THIS
      }                
      return response.json(); })
      .then(function(myJson) {
        console.log(myJson);
        setResources(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[]);

///*FUNCTION TO DELETE RESOURCE FROM JSON FILE*///
async function deleteResourse(id) {
  fetch('http://localhost:3500/resource_links/'+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  });
  const newResource = resourceList.filter(item => item.id !== id);
  setResources(newResource);
  }
///**///
      return (
        <div data-testid='todo-1'>
          <SearchBar  searchTerm={searchTerm} handler={handleSearch} default={"Search for links"}/>
          <Container>
            <CardGroup className='card_group'>
              {
                resourceList.filter(search).map((link,key) =>
                <section key={key}><DataCard delete={deleteResourse} link={link}/>
                </section>
                )
              }
              
            </CardGroup>
          </Container>
      </div>
        
    );
    
  
}

export default ResourceList