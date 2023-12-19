import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar1';
import Home from './Home';
import Popular from './Popular';
import{ BrowserRouter, Route, RouterProvider, Routes }from 'react-router-dom'
import Latest from './Latest';
import Comedy from './Comedy';
import Details from './Details';
import { createContext, useEffect, useState } from 'react';
import { API_KEY, PopularMovies } from './Datas';
import axios from 'axios';
import Movies from './Movies';


export const context=createContext()
function App() {
  const [first, setfirst] = useState([])
  const [first1, setfirst1] = useState([])
  const [first2, setfirst2] = useState([])
  const [first3, setfirst3] = useState([])
  const [first4, setfirst4] =useState([])
  



  // const [movie2,setmovie] = useState([])
  // console.log(movie2);

  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genr`).then((PopularMovies)=>{
      setfirst(PopularMovies.data.results)
      // console.log(PopularMovies.data.results);
    });

    
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((LatestMovies)=>{
        setfirst1(LatestMovies.data.results)
        

        // console.log(LatestMovies.data.results)
    });

    
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((ComedyMovies)=>{
        setfirst2(ComedyMovies.data.results)

  });
  
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genr`).then((Details)=>{
    setfirst3(Details.data.results)
    console.log(Details.data.results);
  });
  // axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((Details)=>{
  //   setfirst3(Details.data.results)
  //   console.log(Details.data.results);
  // });


  },[]);
  
  return (
    <div className="App">
   

   <context.Provider value={{first,setfirst,first1,setfirst1,first2,setfirst2,first3,setfirst3,first4,setfirst4}}>
       <BrowserRouter>
     <Navbar1/>
     {/* <Home/> */}
         <Routes> 


          <Route path='/Home/' element={<Home/>}></Route>
          <Route path='/Movies' element={<Movies/>}></Route>
          <Route path='/Popular' element={<Popular/>}></Route>
          <Route path='/Latest' element={<Latest/>}></Route>
          <Route path='/Comedy' element={<Comedy/>}></Route>
         <Route path='/Details/:id' element={<Details/>}></Route>
        


          </Routes>
          </BrowserRouter>

          </context.Provider>
        

         


     
     

     
    </div>
  );
}

export default App;
