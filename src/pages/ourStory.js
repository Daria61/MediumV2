import React from 'react'

export default function ourStory() {
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
      </div>
    </div>
  )
}
