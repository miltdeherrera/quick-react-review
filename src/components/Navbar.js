import logo from '../react-icon-small.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-box">
          <img src={logo} className="logo" />
        </div>

        <h3>ReactFacts</h3>
      </div>
      <h4 className="navbar-right">React Course - Project 1</h4>
    </nav>
  )
}

export default NavBar