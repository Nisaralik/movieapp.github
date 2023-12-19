import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { API_KEY } from './Datas'
import{PopularMovies} from './Datas'
import { Link } from 'react-router-dom'
import { context } from './App'


function Navbar1() {

  const {first,setfirst,first1,setfirst1,first2,setfirst2,first3,setfirst3,first4,setfirst4}=useContext(context)

  // let [search, setSearch] = useState("");
  // let handleChange = async (e) => {
    
  //   setSearch(e.target.value)
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  //   );
  //     setfirst3(response.data.results)

  //   };


  // setfirst3(PopularMovies.data.results)
  

  return (
    <div  >
  

       <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand  style={{color:"yellow", fontWeight:"800px",fontSize:"30px"}} href="#home"><i style={{color:"yellow"}} class="fa-solid fa-film"></i> <b><i>MovieShow</i></b></Navbar.Brand>
          <Nav className=" ms-auto nav"   variant="danger"  style={{marginRight:"200px"}}>
          <Nav.Link  href="#Home"><Link to='/Home'  style={{textDecoration:"none",color:"yellow"}}> Home</Link> </Nav.Link>
          <Nav.Link  href="#Movies"><Link to='/Movies' style={{textDecoration:"none",color:"white"}}>Movies</Link> </Nav.Link>
          <Nav.Link href="#Popularmovies"><Link to='/Popular' style={{textDecoration:"none",color:"white"}}>Popular</Link>  </Nav.Link>
          <Nav.Link href="#latest"><Link to='/Latest' style={{textDecoration:"none",color:"white"}}>latest</Link>  </Nav.Link>
          <Nav.Link href="#Comedy"><Link to='/Comedy' style={{textDecoration:"none",color:"white"}}>Comedy</Link>  </Nav.Link>
        
      <Form inline style={{marginLeft:"60px"}}>
        <Row>
          <Col xs="auto">
            <Form.Control 
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          <Button  variant="warning">Search</Button>{' '}
          </Col>
          {/* <Col xs="auto">
          <Button style={{borderRadius:"25px",borderStyle:" 2px solid",borderColor:'blue'}}>Sign in</Button>
          </Col> */}
        </Row>
      </Form>
      <i style={{color:"yellow",position:"relative",left:"60px",top:"5px",fontSize:"30px",cursor:"pointer"}}  class="fa-regular fa-heart"></i>
      <i  style={{color:"yellow",position:"relative",left:"120px",top:"5px",fontSize:"30px",cursor:"pointer"}} class="fa-solid fa-download"></i>
      <i  style={{color:"yellow",position:"relative",left:"180px",top:"5px",fontSize:"30px",cursor:"pointer"}} class="fa-solid fa-bars"></i>
           
          </Nav>
        </Container>
      </Navbar>

      
   
  </div>
  
  )
}

export default Navbar1