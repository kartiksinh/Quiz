import React, { useEffect, useState } from 'react';

import { useHistory, Link } from 'react-router-dom';

function CssQuiz(){

   const[history, setHistory] = useState();
   const hist = useHistory();
   useEffect(() => {
      console.log("history",hist);
   }, [])

    return(
        <div>Css</div>
    )
}

export default CssQuiz;