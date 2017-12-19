import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="w3-top">
                    <nav className="w3-bar w3-black w3-card">
                        <a href="#home" className="w3-bar-item w3-button  w3-padding-large">Home</a>
                        <a href="#skills" className="w3-bar-item w3-button  w3-padding-large">Skills</a>
                        <a href="#languages" className="w3-bar-item w3-button  w3-padding-large">Languages</a>
                        <a href="#projects" className="w3-bar-item w3-button  w3-padding-large w3-right">Projects</a>
                        <a href="#work" className="w3-bar-item w3-button  w3-padding-large w3-right">Work</a>
                        <a href="#education" className="w3-bar-item w3-button  w3-padding-large w3-right">Education</a>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;