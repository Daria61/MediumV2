import './App.css';
import Header from './component/header';
import HeadSection from './component/HeadSection'
import Trend from './component/trend'
import Main from './component/main'
import { useState } from 'react';
let headTit = ["Our story", "Membership","Write", "Sign In"]
let headSecTit = { HeadTit:"Stay curious.", Tit:"Discover stories, thinking, and expertise from writers on any topic.", Btn:"Start reading"}
let aside =["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Tems", "About", "Text to speech"]
let News =[
  {id:"1", 
  img: require('../src/image/LongCovid.png'), 
  head:"Understanding Long Covid",
  title:"We know more now than before, and it’s still alarming" ,
  date:{day:"9", month:"Dec", year : "2023"}, 
  isTrending : false, 
  category:"Writing", 
  key:"Long Covid",
  read:"9 min read",
  createdUser:{ Name:"Dr. Tom Frieden", userId:"1", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"2", 
  img:require('../src/image/News2.png'), 
  head:"Braiding Past into Future",
  title:"Nican Huehcatlahtolli, a New Futurism", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"Machine Learning", 
  key:"Futurism",
  read:"11 min read",
  createdUser:{ Name:"David Bowles", userId:"2", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"3", 
  img:require('../src/image/News3.png'), 
  head:"Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
  title:"An estranged father reflects on the stigma and surprising prevalence of these family rifts.", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"Relationships", 
  key:"Parental Alienation",
  read:"6 min read",
  createdUser:{ Name:"Ed Erginziger", userId:"3", img:require('./image/profile.png'), organization :"  Invisible Illness"} 
  },
  {id:"4", 
  img:require('../src/image/News4.png'), 
  head:"ChatGPT Is Having a Thomas Edison Moment",
  title:"Why breakthrough technologies need to be accessible", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"Technology", 
  key:"Gpt 3",
  read:"4 min read",
  createdUser:{ Name:"Thomas Smith", userId:"4", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"5", 
  img:require('../src/image/News5.png'), 
  head:" Spotify’s Year-End Lists Are the Ultimate Personality Test",
  title:"Why the mass sharing of the music streaming service’s year-end lists is uniquely telling", 
  date:{day:"6", month:"Dec", year : "2019"} ,
  isTrending : true, 
  category:"Productivity", 
  key:"Music",
  read:"3 min read",
  createdUser:{ Name:"Allegra Hobbs", userId:"5", img:require('./image/profile.png') ,organization :" Forge"} 
  },
  {id:"6", 
  img:require('../src/image/News6.png'), 
  head:"Why Your Team Needs a Weekly Metrics Review",
  title:"What is it, how you can start, and why it will make your product team much better builders and collaborators.", 
  date:{day:"30", month:"Nov", year : "2022"}, 
  isTrending : true, 
  category:"Productivity", 
  key:"Data",
  read:"7 min read",
  createdUser:{ Name:"Julie Zhou ", userId:"5", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"7", 
  img:require('../src/image/News7.png'), 
  head:"Tyrion Lannister and The 7 Habits of Highly Effective People",
  title:"A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People", 
  date:{day:"2", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"Self Improvement", 
  key:"Game of Thrones",
  read:"7 min read",
  createdUser:{ Name:"Elliot Graebert", userId:"6", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"8", 
  img:require('../src/image/News8.png'), 
  head:"Microdosing, Mastodon, and Jonah Hill.",
  title:"Seeking peace, finding kindness.", 
  date:{day:"30", month:"Nov", year : "2022"}, 
  isTrending : false, 
  category:"Data Science", 
  key:"Mental Health",
  read:"8 min read",
  createdUser:{ Name:"Mindy Stern", userId:"7", img:require('./image/profile.png') ,organization :" Thoughts And Ideas"} 
  },
  {id:"9", 
  img:require('../src/image/News9.png'), 
  head:"What if failure is the plan?",
  title:"I’ve been thinking a lot about failure lately. Failure comes in many forms, but I’m especially interested in situations in which people…", 
  date:{day:"5", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"Self Improvement", 
  key:"Twitter",
  read:"14 min read",
  createdUser:{ Name:"danah boyd", userId:"7", img:require('./image/profile.png') ,organization :""} 
  },
]
function App() {
  return (
    <div className="App">
      <Header tit={headTit}/>
      <HeadSection {...headSecTit}/>
      <Trend info={News}/>
      <Main info={News} aside={aside}/>
    </div>
  );
}

export default App;
