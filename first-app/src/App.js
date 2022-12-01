import './App.css';
import Employee from './compunent/empolyee'

import { useState } from 'react';

function App() {
  // we  can write some logic code here
  //  console.log('we are about to list some employees here');

  const [role, setRole] = useState('dev'); // creating a state
  const showEmployee = true;
  const [employees, setEmployees] = useState(
    [
      {
        name: "paul mike",
        role: "CEO",
        img: "https://images.pexels.com/photos/4722014/pexels-photo-4722014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "tayo olugbade",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "paul mike",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?"
      },{
        name: "olubunmi feyisayo",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?"
      },
      {
        name: "mary ahepke",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?"
      },
      {
        name: "pofi able",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?"
      },
      {
        name: "paul mike",
        role: "CEO",
        img: "https://images.pexels.com/photos/7646653/pexels-photo-7646653.jpeg?"
      }
    ]
  )
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
            <div className="flex flex-wrap justify-center">
              {
                employees.map((employee) => {
                  return(
                      <Employee 
                        name = {employee.name}
                        role = {employee.role}
                        img = {employee.img}
                      />
                  )
                })
              }
            </div>
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
