import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/business">Business</Link>
                            <Link className="dropdown-item" to="/technology">Technology</Link>
                            <Link className="dropdown-item" to="/sports">Sports</Link>
                            <Link className="dropdown-item" to="/science">Science</Link>
                            <Link className="dropdown-item" to="/health">Health</Link>
                            <Link className="dropdown-item" to="/general">General</Link>
                            <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}
