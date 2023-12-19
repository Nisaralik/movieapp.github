import axios from 'axios'
import React, { useContext, useState } from 'react'
import {imageUrl} from './Datas'
import { API_KEY, LatestMovies } from './Datas'
import { Card } from 'react-bootstrap'
import { context } from './App'
import { Link } from 'react-router-dom'

function Latest() {

  const {first1,setfirst}=useContext(context)
    console.log(first1)

    // axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((LatestMovies)=>{
    //     setfirst(LatestMovies.data.results)
        

    //     // console.log(LatestMovies.data.results)
    // })
  return (
    <div style={{backgroundColor:"black",height:"2400px"}}>
        <div>
        <h5 style={{color:"yellow",paddingTop:"30px",marginLeft:"-1280px"}}> Latest Movies</h5>
      </div>
      
       <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around",padding:"20px",height:"80px",marginTop:'20px',rowGap:"40px"}}>
        {
            first1.map((movie)=>(
              <Link style={{textDecoration:"none"}} to={`/Details/${movie.id}`}>
                <Card  style={{ width: '18rem',height:"25rem",display:"flex",justifyContent:"space-around",padding:"30px",backgroundColor:"black",borderRadius:"10px"}}>
                 <img style={{borderRadius:"15px"}} src={`${imageUrl}${movie && movie.poster_path}`} alt=''/>
                <Card.Body>
                  <Card.Title style={{color:"yellow",fontFamily:"Arial Black (sans-serif)",fontSize:"15px"}}>{movie.title}</Card.Title>
                 
                
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

export default Latest