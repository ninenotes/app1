import React from 'react'
import { userContext } from './context'
import Headers2 from './context-header2'

function App() {
  let [user,setUser]=React.useState('')
  return (
   <userContext.Provider value={[user,setUser]}>
    <Headers2/>
   </userContext.Provider>
  );
}

export default App;

