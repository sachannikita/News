import React from 'react'

const Navbar = ({setCategory ,toggleTheme, theme}) => {
  return (
   <div>
 
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsNest</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("technology")} >Technolgy</div>
          </li>
         <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("sports")} >Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("business")} >Bussiness</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("health")} >Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("science")} >Science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link"  onClick={()=>setCategory("entertainment")}>Entertainment</div>
          </li>
          <button
          className="btn btn-outline-secondary ms-3"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar

