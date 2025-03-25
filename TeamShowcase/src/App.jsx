import React from 'react'
import './App.css'
import User from "./components/TeamMemberCard"
function App() {
  return(
    <div> 
      <h1>Team Showcase</h1>
      <User name="John doe"  title="Software Engineer"></User>
      <User name="Akshit Sharma"  title="programmer"></User>
    </div>
  )
}
export default App;
