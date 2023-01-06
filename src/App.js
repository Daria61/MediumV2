import './App.css';
import Header from './component/header';
import HeadSection from './component/HeadSection'
import Trend from './component/trend'
import Main from './component/main'
let headTit = ["Our story", "Membership","Write", "Sign In"]
let headSecTit = { HeadTit:"Stay curious.", Tit:"Discover stories, thinking, and expertise from writers on any topic.", Btn:"Start reading"}
let News =[
  {id:"1", 
  img: require('../src/image/LongCovid.png'), 
  head:"Understanding Long Covid",
  title:"We know more now than before, and it’s still alarming" ,
  date:{day:"9", month:"Dec", year : "2023"}, 
  isTrending : true, 
  category:"", 
  key:"Long Covid",
  read:"9 min read",
  createdUser:{ Name:"Dr. Tom Frieden", userId:"1", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"2", 
  img:require('../src/image/LongCovid.png'), 
  head:"Braiding Past into Future",
  title:"Nican Huehcatlahtolli, a New Futurism", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"", 
  key:"Futurism",
  read:"11 min read",
  createdUser:{ Name:"David Bowles", userId:"2", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"3", 
  img:require('../src/image/LongCovid.png'), 
  head:"Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
  title:"An estranged father reflects on the stigma and surprising prevalence of these family rifts.", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"", 
  key:"Parental Alienation",
  read:"6 min read",
  createdUser:{ Name:"Ed Erginziger", userId:"3", img:require('./image/profile.png'), organization :" in Invisible Illness"} 
  },
  {id:"4", 
  img:require('../src/image/LongCovid.png'), 
  head:"ChatGPT Is Having a Thomas Edison Moment",
  title:"Why breakthrough technologies need to be accessible", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"", 
  key:"Gpt 3",
  read:"4 min read",
  createdUser:{ Name:"Thomas Smith", userId:"4", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"5", 
  img:require('../src/image/LongCovid.png'), 
  head:" Spotify’s Year-End Lists Are the Ultimate Personality Test",
  title:"Why the mass sharing of the music streaming service’s year-end lists is uniquely telling", 
  date:{day:"9", month:"Dec", year : "2022"} ,
  isTrending : true, 
  category:"", 
  key:"Music",
  read:"3 min read",
  createdUser:{ Name:"Allegra Hobbs", userId:"5", img:require('./image/profile.png') ,organization :" in Forge"} 
  },
  {id:"6", 
  img:require('../src/image/LongCovid.png'), 
  head:"Why Your Team Needs a Weekly Metrics Review",
  title:"What is it, how you can start, and why it will make your product team much better builders and collaborators.", 
  date:{day:"9", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"", 
  key:"Data",
  read:"7 min read",
  createdUser:{ Name:"Julie Zhou ", userId:"5", img:require('./image/profile.png') ,organization :""} 
  },
  {id:"7", 
  img:require('../src/image/LongCovid.png'), 
  head:"Tyrion Lannister and The 7 Habits of Highly Effective People",
  title:"A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People", 
  date:{day:"2", month:"Dec", year : "2022"}, 
  isTrending : true, 
  category:"", 
  key:"Data",
  read:"7 min read",
  createdUser:{ Name:"Elliot Graebert", userId:"6", img:require('./image/profile.png') ,organization :""} 
  },
]
function App() {
  return (
    <div className="App">
      <Header tit={headTit}/>
      <HeadSection {...headSecTit}/>
      <Trend info={News}/>
      <Main info={News}/>
    </div>
  );
}

export default App;
