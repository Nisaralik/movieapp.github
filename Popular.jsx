import React, { useEffect, useState } from 'react'
import { API_KEY } from './Datas';
import { imageUrl } from './Datas';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './App';



function Popular() {
  const {first,setfirst}=useContext(context)


  
  //   axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genr`).then((PopularMovies)=>{
  //     setfirst(PopularMovies.data.results);
  //     // console.log(PopularMovies.data.results);

    
  //   })
    

 
 
  
  return (
    
    <div style={{backgroundColor:"black",height:"2400px"}}>
      <div>
    
      <h5 style={{color:"yellow",paddingTop:"30px",marginLeft:"-1270px"}}> Popular Movies</h5>
      </div>
      
   <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around",padding:"20px",height:"80px",marginTop:'20px',rowGap:"40px"}}>
   {
    first.map((movie)=>(
      <Link style={{textDecoration:"none"}} to={`/Details/${movie.id}`}>
      <Card style={{ width: '18rem',height:"25rem",display:"flex",justifyContent:"space-around",padding:"30px",backgroundColor:"black",borderRadius:"10px"}}>
        
       
              <img style={{borderRadius:"15px"}} src={`${imageUrl}${movie && movie.poster_path}`} alt=''/>
           
      <Card.Body>
        <Card.Title style={{color:"yellow",fontFamily:"Arial Black (sans-serif)",fontSize:"15px",}}>{movie.title}</Card.Title>
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
    
  )
}

export default Popular