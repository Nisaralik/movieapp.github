import React, { useContext, useEffect } from 'react'
import { context } from './App'
import { Link } from 'react-router-dom'
import { imageUrl } from './Datas'
import { Card } from 'react-bootstrap'
import './Movies.css';

function Movies() {
    const {first,setfirst,first1,setfirst1,first2,setfirst2,first3,setfrist3,first4,setfirst4}=useContext(context)
    useEffect(()=>{
    
        const spreading=[...first,...first1,...first2]
        setfirst4(spreading)


    
      },[])
  return (
    <div>


<div style={{backgroundColor:"black",height:"6700px"}}>
      <div>
    
      <h5 style={{color:"yellow",paddingTop:"30px",marginLeft:"-1340px"}}>Movies</h5>
      </div>
      
   <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around",padding:"20px",height:"80px",marginTop:'20px',rowGap:"40px"}}>
   {
    first4.map((movie)=>(
      <Link style={{textDecoration:"none"}} to={`/Details/${movie.id}`}>
      <Card style={{ width: '18rem',height:"25rem",display:"flex",justifyContent:"space-around",padding:"30px",backgroundColor:"black",borderRadius:"10px"}}>
        
       
              <img style={{borderRadius:"15px"}} src={`${imageUrl}${movie && movie.poster_path}`} alt=''/>
           
      <Card.Body>
        <Card.Title style={{color:"yellow",fontFamily:"arial",fontSize:"15px",textDecoration:"none"}}> {movie.title}{movie.name}</Card.Title>
      </Card.Body>
    </Card>
    <div class="loader1">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  
    
    </Link>
    
    
  
    ))
   }
   </div>

    </div>
      {/* {
    first3.map((movie)=>(
      <Link to={`/Details/${movie.id}`}>
        
      <Card style={{ width: '18rem',display:"flex"}}>

              <img src={`${imageUrl}${movie && movie.poster_path}`} alt=''/>
      <Card.Body>
        <Card.Title>{movie.original_name}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
    ))
   } */}
      
       
    
    </div>
  )
}

export default Movies