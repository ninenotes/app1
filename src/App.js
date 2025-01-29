import React from 'react'
import { userContext } from './context'
import Content from './context-content';

function App() {
  return (
   <userContext.Provider value={'thepnimit'}>
    <Content/>
   </userContext.Provider>
  );
}

export default App;

