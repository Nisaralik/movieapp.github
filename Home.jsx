import React, { createContext, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { context } from './App';
import './Home.css';


function Home() {
  const {first1,setfirst1,first3,setfirst3}=useContext(context)

  return (
    <div>
         <Carousel>
      <Carousel.Item>
      <img style={{height:"700px",width:"100%"}} src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/114336674/original/79358864317bb18d0feaeb9b16e001957ed18c5a/design-stunning-poster-for-movie-events-sports-and-more.png' alt=''/>
        <Carousel.Caption>
        <span class="loader"></span> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img style={{height:"700px",width:"100%"}} src= 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/114336674/original/79358864317bb18d0feaeb9b16e001957ed18c5a/design-stunning-poster-for-movie-events-sports-and-more.png' alt=''/>

        <Carousel.Caption>
        <span class="loader"></span> 
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      {/* <> */}

      {/* <p style={{textAlign:"initial",width:"50%",marginLeft:"600px",marginTop:"50px",fontWeight:"800",fontFamily:"arial"}}>
      In its short history, the art of motion pictures has frequently undergone changes that seemed fundamental, such as those resulting from the introduction of sound. It exists today in styles that differ significantly from country to country and in forms as diverse as the documentary created by one person with a handheld camera and the multimillion-dollar epic involving hundreds of performers and technicians.

A number of factors immediately come to mind in connection with the film experience. For one thing, there is something mildly hypnotic about the illusion of movement that holds the attention and may even lower critical resistance. The accuracy of the film image is compelling because it is made by a nonhuman, scientific process. In addition, the motion picture gives what has been called a strong sense of being present; the film image always appears to be in the present tense. There is also the concrete nature of film; it appears to show actual people and things.

No less important than any of the above are the conditions under which the motion picture ideally is seen, where everything helps to dominate the spectators. They are taken from their everyday environment, partially isolated from others, and comfortably seated in a dark auditorium. The darkness concentrates their attention and prevents comparison of the image on the screen with surrounding objects or people. For a while, spectators live in the world the motion picture unfolds before them.
      </p>
      </> */}
    </div>
  )
}

export default Home