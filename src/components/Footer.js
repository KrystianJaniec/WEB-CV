import React, {Component} from 'react';

class Footer extends Component {
    render() {
        if (this.props.data) {
            var links = this.props.data.social.map((links) => {
                return <a href={links.url}><i className={links.className}/></a>

            });
        }
        return (
            <div>
                <footer>
                    <div className="w3-container w3-black w3-center w3-margin-top">
                        <p>Design by Krystian Janiec</p>
                        <p className="w3-center w3-large">{links}</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;