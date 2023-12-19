import axios from 'axios'
import React, { useContext, useState } from 'react'
import { API_KEY, imageUrl } from './Datas'
import { Card } from 'react-bootstrap'
import { context } from './App'
import { Link } from 'react-router-dom'

function Comedy() {

  const {first2,setfirst2}=useContext(context)
  console.log(first2);
  // axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((comedy)=>{
  //   setfirst(comedy.data.results)

  //   // console.log(comedy.data.results);

  // })
  return (
    <div style={{backgroundColor:"black",height:"2400px"}}>
      <div>
    
      <h5 style={{color:"yellow",paddingTop:"30px",marginLeft:"-1260px"}}>  Comedy Movies</h5>
    </div>
    
 <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around",padding:"20px",height:"80px",marginTop:'20px',rowGap:"40px"}}>
 {
  first2.map((movie)=>(
    <Link style={{textDecoration:"none"}} to={`/Details/${movie.id}`}>
    <Card style={{ width: '18rem',height:"25rem",display:"flex",justifyContent:"space-around",padding:"30px",backgroundColor:"black",borderRadius:"10px"}}>
      
     
            <img style={{borderRadius:"15px"}} src={`${imageUrl}${movie && movie.poster_path}`} alt=''/>
         
    <Card.Body>
      <Card.Title style={{color:"yellow",fontFamily:"Arial Black (sans-serif)",fontSize:"15px"}}>{movie.name}</Card.Title>
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

export default Comedy