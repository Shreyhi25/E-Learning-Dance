import React from 'react';
import {Link} from 'react-router-dom';

export default function Nopage() {
  return (
    <div>
         
         Page Not Found!

         <Link to ="/register"><button type="button">Please Go Back</button></Link>
        
    </div>
  )
}
