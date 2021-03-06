import React from "react"
import { Link } from "gatsby"
import github from "../img/github-icon.svg"
import logo from "../img/logo.svg"
type State = {
  readonly active: boolean
  navBarActiveClass: string
}

class Navbar extends React.Component<any, State> {
  constructor(props: State) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger(): void {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render(): JSX.Element {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ background: "rgb(0, 128, 255)" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/contact" style={{ color: "#ffffff", fontSize: "18px" }}>
                Contact
              </Link>
              <Link className="navbar-item" to="/profile" style={{ color: "#ffffff", fontSize: "18px" }}>
                Profile
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="https://github.com/noriaki0712" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
