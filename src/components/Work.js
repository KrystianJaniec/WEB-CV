import React, {Component} from 'react';

class Work extends Component {
    render() {
        if (this.props.data) {
            var work = this.props.data.work.map((work) => {
                return <div key={work.company}>
                    <h3 className="w3-opacity"><b>{work.company}</b> - {work.title}</h3>
                    <h4 className="w3-text-black">
                        <i className="fa fa-calendar fa-fw w3-margin-right w3-text-brown"/><em>{work.years}</em>
                    </h4>
                    <p>{work.description}</p>
                </div>
            });
        }
        return (
            <div>
                <section id="work">
                    <div className="w3-container">
                        <h2 className="w3-text-grey w3-padding-16">
                            <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-brown"/><b>Work
                            Experience</b>
                        </h2>
                        <div className="w3-container">{work}</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Work;