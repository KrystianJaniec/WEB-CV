import React, {Component} from 'react';

class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var image = 'images/' + this.props.data.image;
            var profession = this.props.data.profession;
            var birthDate = this.props.data.birth;
            var city = this.props.data.address.city;
            var code = this.props.data.address.code;
            var email = this.props.data.email;
            var phone = this.props.data.phone;
            var cvDownload = this.props.data.cvDownload;
            var links = this.props.data.social.map((link) => {
                return <a href={link.url}><i className={link.className}/></a>
            });
        }
        return (
            <div>
                <section id="home">
                    <div className="w3-display-container">
                        <div className="w3-center ">
                            <img className="w3-padding" src={image} alt="Profile"/>
                            <h1 className="w3-center">{name}</h1>
                            <h2 className="w3-center w3-xxlarge">{links}</h2>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="w3-container">
                        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-red"/>{profession}</p>
                        <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-red"/>{birthDate}
                        </p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-red"/>{city} {code}</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-red"/>{email}</p>
                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-red"/>{phone}</p>
                        <p><a href={cvDownload} className="button">
                            <i className="fa fa-download fa-fw w3-margin-right w3-large w3-text-red"/>Download
                            Resume</a>
                        </p>
                        <hr/>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;