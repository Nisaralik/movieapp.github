import React, {  useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { API_KEY, PopularMovies, imageUrl } from './Datas'
import { context } from './App'
import axios from 'axios'




function Details() {
  // // const movie2=useContext(context)
  // const [first, setfirst] = useState(context)
  // axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genr`).then((PopularMovies)=>{
  //   // setfirst(PopularMovies.data.results);
  //   // console.log(PopularMovies.data.results);

  // })
  
  const {first3,setfirst3,first4,setfirst4}=useContext(context);
  const { id }=useParams();
  const userId=parseInt(id);
  console.log(id)

  let currentdata = first3.find((item) => item.id === userId)
  console.log(currentdata);

  return (
    <div>


    <div style={{width:"50px",height:"100px"}} >

      <img  style={{width:"1535px",height:"650px"}} src={`${imageUrl}${currentdata.backdrop_path}`} alt="" />
    </div>
   
    <div >
  
      <div  >
        <img style={{width:"250px",height:"300px",borderRadius:"10px",boxShadow:"20px white"}} src={`${imageUrl}${currentdata.poster_path}`} alt="" />
      </div>
      

      <div style={{color:"white"}} >
        <h1><b>{currentdata.original_name || currentdata.original_title}</b></h1>
        <p style={{marginTop:"-10px"}} >
          <b>Language: {currentdata.original_language}</b>
        </p>
        <p style={{marginTop:"-15px"}}>
          {currentdata.vote_average} || {currentdata.vote_count} Votes
        </p>
        <p style={{marginTop:"-15px"}}><b>popularity: {currentdata.popularity}</b></p>
        <p style={{marginTop:"-15px"}}><b>Release date:{currentdata.release_date } </b></p>
        <h2 style={{marginTop:"-15px"}}><b>Overview</b></h2>
        <p>{currentdata.overview}</p>
         </div>

     </div>

  </div>
  )
}

export default Details;