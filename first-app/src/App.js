import './App.css';
import Employee from './compunent/empolyee'

import { useState } from 'react';

function App() {
  // we  can write some logic code here
  //  console.log('we are about to list some employees here');

  const [role, setRole] = useState('dev'); // creating a state
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? 
        (
          <>

            <input 
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                setRole(e.target.value); // you never assign directly to a state but you do that through the setRole like a function.
              }}
            />
            <Employee name="Paul" role="CEO"/>
            <Employee name="TY" role="Co-founder"/>
            <Employee name="Olubunmi" role={role}/>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </>
        )
      :
        (
          <p>you can't see Employees! </p>
        )
      }
      
    </div>
  );
}

export default App;
