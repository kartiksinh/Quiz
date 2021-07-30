import React, { useEffect, useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { NavDiv, Ul, H1 } from './NavStyles';

const getUserInfo = () => {
   let username = localStorage.getItem('user');
   if(username) {
      return JSON.parse(username);
   } else return [];
}

function Nav(){

   const history = useHistory();
   const pathname = history.location.pathname;
   const[username, getUsername] = useState(getUserInfo())

   const onLogout = () => {
      localStorage.clear();
      history.push("/")
   }
   useEffect(() => {
      getUserInfo();
      console.log("history");
   }, [pathname])

    return(
        <NavDiv>
           <H1>Technology Quiz</H1>
            <Ul>
                {history.location.pathname !== "/" ? 
                <Link to="/" onClick={onLogout}>
                   <li>Logout</li>
                </Link>: null}
            </Ul>
        </NavDiv>
    )
}

export default Nav;