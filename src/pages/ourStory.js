import React from 'react'
import { useContext } from 'react'
import { HeaderColor } from '../context/create.context'

const empArr = [
  {id:"1",
  Name: "Erica Dhawan",
  img: require("../image/mediumworker.png")
  },
  {id:"2",
  Name: "Devon Price",
  img: require("../image/mediumworker.png")
  },
  {id:"3",
  Name: "GEN",
  img: require("../image/mediumworker.png")
  },
  {id:"4",
  Name: " Scott Galloway",
  img: require("../image/mediumworker.png")
  },
  {id:"5",
  Name: " Kaki OKumura",
  img: require("../image/mediumworker.png")
  },
  {id:"6",
  Name: " Hal H.Harris",
  img: require("../image/mediumworker.png")
  },
  {id:"7",
  Name: "OneZero",
  img: require("../image/mediumworker.png")
  },
  {id:"8",
  Name: " Carvell Wallace",
  img: require("../image/mediumworker.png")
  },
  {id:"9",
  Name: " Elemental",
  img: require("../image/mediumworker.png")
  },
  {id:"10",
  Name: " Sarah Cottrell",
  img: require("../image/mediumworker.png")
  },
  {id:"11",
  Name: " Forge",
  img: require("../image/mediumworker.png")
  },
  {id:"12",
  Name: " LEVEL",
  img: require("../image/mediumworker.png")
  },
]

export default function OurStory() {
  const {setHeadColor} = useContext(HeaderColor)

  setHeadColor("white")

  return (
    <div>
      <div className='border-bottom ' style={{padding:"100px 0"}}>
        <h1 style={{paddingTop:"70px", fontSize:"86px"}}>
          Every idea needs a Medium
        </h1>
      </div>
      <div className='row border-bottom'>
        <div className='col-6 p-5 border-end'>
          <p className='text-start'>
          The best ideas can change who we are. Medium is where 
          those ideas take shape, take off, and spark powerful conversations.
           We’re an open platform where over 100 million readers come to find 
           insightful and dynamic thinking. Here, expert and undiscovered voices 
           alike dive into the heart of any topic and bring new ideas to the surface. 
           Our purpose is to spread these ideas and deepen understanding of the world.We’re 
           creating a new model for digital publishing. One that supports nuance, complexity, 
           and vital storytelling without giving in to the incentives of advertising. It’s an 
           environment that’s open to everyone but promotes substance and authenticity. And it’s 
           where deeper connections forged between readers and writers can lead to discovery and growth. 
           Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
          </p>
        </div>
        <div className='col-6'>
          <img className='w-100'  src={require("../image/moon.png")} alt="earth"/>
        </div>
      </div>
      <div style={{backgroundColor:"#ffd1b9"}}>
        <div style={{padding:"100px 0"}}>
          <h1  style={{paddingTop:"70px", fontSize:"86px"}}> A living network of curious minds.</h1>
          <p style={{width:"600px", margin:"0 auto"}}>
          Anyone can write on Medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You’ll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.
          </p>
        </div>
        <div className='row justify-content-between'>
          {empArr.map((a)=>{
            return(
              <div className='col-4 '>
                <div className='border-top border-dark py-3 mx-2 d-flex align-items-center'>
                  <img src={a.img} alt="" style={{width:"50px"}}/>
                  <h3 className='m-0 ms-2'>{a.Name}</h3>
                </div>
              </div>
            )
          })}
        </div>
        <div className='bg-dark row '>
          <div className='col-6 p-5'>
            <h1 style={{fontSize:"80px", color:"white"}}>Over 100 million readers and growing.</h1>
          </div>
          <div className='col-6 border-start p-5'>
            {/* <img src={require("../image")} alt=""/> */}
            <p style={{color:"white"}}>
            "There’s no other place that combines such an excellent level of writing with a truly engaged and active community. Medium is truly where ideas are born, shared, and spread."
            </p>
            <p>
              Jasmine Bina
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
