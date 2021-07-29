import React, { useEffect, useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { NavDiv, Ul, H1 } from './NavStyles';

function Nav(){

   const history = useHistory();
   const hist = useHistory();

   const onLogout = () => {
      localStorage.clear();
      history.push("/")
   }
   useEffect(() => {
      console.log("history",hist);
   }, [hist])

    return(
        <NavDiv>
           <H1>Quiz</H1>
            <Ul>
                {hist.location.pathname !== "/" ? 
                <Link to="/" onClick={onLogout}>
                   <li>Logout</li>
                </Link>
                : 
                "Please log in to start the quiz"}
            </Ul>
        </NavDiv>
    )
}

export default Nav;