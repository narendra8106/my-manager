import React, { useState, useEffect } from 'react';
import Header from './reactComponents/Header';
import Contact from './reactComponents/Contact';
import ViewBody from './reactComponents/ViewBody';



function App() {
  
  return ( 
    <div>
      <Header/>
      <ViewBody/>
      <Contact/>
      
    </div>
   );
}

export default App;

