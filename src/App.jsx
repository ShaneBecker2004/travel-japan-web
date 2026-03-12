import './App.css';

function App() {
  return (
    <div>
        <nav className="navbar">
            <a href="index.html" className="logo">
                <img src="/images/Flag_of_Japan.svg.png" alt="Nippon Navigator" />
            </a>

        <div className="nav-links">
                <a className="active" href="index.html">Home</a>
            <div className="dropdown">
                <button className="dropbtn">About
                <i className="fa fa-caret-down"></i>
                </button>
            <div className="dropdown-content">
                <a href="aboutus.html">About Us</a>
                <a href="commonphrase.html">Common Phrases</a>
            </div>
            </div>
                <a href="explore.html">Explore</a>
            <div className="dropdown">
                <button className="dropbtn">Others
                <i className="fa fa-caret-down"></i>
                </button>
            <div className="dropdown-content">
                <a href="map.html">Map</a>
                <a href="exchangerate.html">Exchange Rates</a>
                <a href="japan-immigration.html">Japan Immigration</a>
            </div>
            </div>
                <a href="index.html">Create Plan</a>

                <a className="account" href="index.html">Account</a>
        </div>
        </nav>

        <div className="content">
            <img src="/images/Nippon_Navigator_Logo.png" alt="Nippon Navigator" />
            <h3>Welcome to Nippon Navigator!</h3>
        </div>

        <footer className="footer">
            Nippon Navigator @2026 Test
        </footer>
      </div>
  );
}

export default App;