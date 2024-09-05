import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"


import Highlighter from 'react-highlight-words'


const data = [
   "What is Web development?\n\n June/02/2010.\n\n Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.\n\n\n",
   "What is front-end web development?\n\n July/07/2019.\n\n  Front-end development is the process of building components that interact with users.\n\n\n",
  "What is back-end web development?\n\n Oct/21/2021.\n\n  Back-end development means working on server-side software, which focuses on everything you can't see on a website.\n\n\n ",
   "What is mobile development?\n\n Sep/19/2015.\n\n  Mobile application development is the process of creating software applications that run on a mobile device.\n\n\n",
  "How to become a software Developer?\n\n Aug/12/2017.\n\n To become a software engineer, you typically need a bachelor's degree in computer science, software engineering, or a related field.\n\n\n",

  
];

const formatText = (text) =>{
  return text.split('\n').map((line, index)=> (
    <React.Fragment key={index}>
    {line} 
    <br />
    </React.Fragment>
  ));
}
function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const handleSubmit = (e)=>{
     e.preventDefault();

     if(searchTerm.trim() === ''){
      setSearchResults([]);
      setIsSearchPerformed(false);
      return;
     }
     const filteredResults=  data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setSearchResults(filteredResults);
     setIsSearchPerformed(true);
  } 




return (

  <div className="App">
    <h1>Ask about Development</h1>

   
   <form id="search" onSubmit={handleSubmit}>
    <input 
    type='text'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for something.."
    style={{padding : '10px', width: '300px',margin : '20px 0'}}
    />
    <button id="btn" type="submit">Search</button>
   </form>
    
    {isSearchPerformed && searchResults.length >0 && (
      <div>
        <p id="results">{searchResults.length} result found</p>
        </div>  
    )}

    <div className="results">
      {isSearchPerformed && searchResults.length > 0? (
        searchResults.map((result, index) => (
          <p key={index}>
            <Highlighter 
            highlightClassName='highlight'
            searchWords={[searchTerm]}
            autoEscape={true}
            textToHighlight={result}
            />
          </p>
        ))
      ): (
        isSearchPerformed && searchTerm &&   <p>No results to display</p>
      )
    }
    </div>
</div>
     
      
        
  
    
 
);

};
export default App
