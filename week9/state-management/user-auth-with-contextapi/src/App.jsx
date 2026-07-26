import Navbar from './components/Navbar'
import Login from './components/Profile'

function App() {

  return (
    <> 
      <h1>User Auth</h1>
      <div style={{display: "flex", justifyContent: "space-between", alignItem: "center", background: "green", gap: 10}}>
        <Navbar /> 
          <Login />
        <div style={{ background: "blue"}}>
        </div>
      </div>
    </>
  )
}

export default App
