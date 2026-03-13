import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return (
    <div className="content">
      <img src="/images/Nippon_Navigator_Logo.png" alt="Nippon Navigator" />
      <h3>Welcome to Nippon Navigator!</h3>
    </div>
  )
}

function Explore() {
  return (
    <div className="content">
      <h3>Explore Japan</h3>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/images/Flag_of_Japan.svg.png" alt="Nippon Navigator" />
        </Link>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <div className="dropdown">
            <button className="dropbtn">About</button>
            <div className="dropdown-content">
              <Link to="/about">About Us</Link>
              <Link to="/phrases">Common Phrases</Link>
            </div>
          </div>

          <Link to="/explore">Explore</Link>

          <div className="dropdown">
            <button className="dropbtn">Others</button>
            <div className="dropdown-content">
              <Link to="/map">Map</Link>
              <Link to="/exchange">Exchange Rates</Link>
              <Link to="/immigration">Japan Immigration</Link>
            </div>
          </div>

          <Link to="/plan">Create Plan</Link>

          <Link to="/account" className="account">Account</Link>

        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>


      <footer className="footer">
        Nippon Navigator @2026 Test
      </footer>

    </BrowserRouter>
  )
}

export default App