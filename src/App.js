import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState } from 'react'

function App(){
  const dummyIdeas = [
        {id: 1, title: 'Pass Turing',
        description: 'Study azz off.'
          },
        {id: 2, title: 'Make Espresso',
          description: 'Get jitters, code faster.'
          },
        {id: 3, title: 'Prank War',
          description: 'Googly eye everything.'
          }
      ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  
  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;


// import './App.css';
// import Form from './Form'
// import Ideas from './Ideas';
// import { useState } from 'react';

// function App() {
//   const [ideas, setIdeas] = useState([]);

//   function addIdea(newIdea) {
//     setIdeas([...ideas, newIdea]);
//   }

//   return (
//     <main className="App">
//       <h1>IdeaBox</h1>
//       {/* Conditional rendering if no ideas */}
//       {!ideas.length && <h2>No ideas yet -- add some!</h2>}
//       {/* Pass ideas as props to Ideas component */}
//       <Ideas ideas={ideas} />
//     </main>
//   );
// }

// export default App;


// function App() {
//   const dummyIdeas = [
//     {id: 1, title: 'Pass Turing',
//     description: 'Study azz off.'
//       },
//     {id: 2, title: 'Make Espresso',
//       description: 'Get jitters, code faster.'
//       },
//     {id: 3, title: 'Prank War',
//       description: 'Googly eye everything.'
//       }
//   ]
//   const [ideas, setIdeas] = useState(dummyIdeas);

//   return ( 
//     <main className="App">
//       <h1>IdeaBox</h1>
//       {!ideas.length && <h2>No ideas yet -- add some!</h2> }
//       <Ideas ideas={ideas} />
//     </main>
//    )
// }



// useState is a React Hook that allows you to 
// add state to functional components.

// setIdeas is the setter function provided 
// by useState to modify the value of ideas.