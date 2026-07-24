import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams,
  Link,
} from "react-router-dom";

function LinkRoute() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function Nav(){
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/concerts/">Concerts</Link>
        <Link to="/concerts/city">City</Link>
        <Link to="/concerts/trending">Trending</Link>
    </nav>
  );
}


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us!</p>
    </div>
  );
}

function ConcertsHome() {
  return (
    <div>
      <header>
        <h1>My Concerts</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Trending() {
  const params = useParams();
  return (
    <div>
      <h2>Trending Page</h2>
      <p>Reach out to us!</p>
      <p>{params}</p>
    </div>
  );
}
function City() {
  const params = useParams()
  return (
    <div>
      <h2>City Page</h2>
      <p>Reach out to us!</p>
      <p>{params}</p>
    </div>
  );
}

export default LinkRoute;
