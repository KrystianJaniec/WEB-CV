import React, {Component} from 'react';

class Education extends Component {
    render() {
        if (this.props.data) {
            var education = this.props.data.education.map((education) => {
                return <div key={education.school}>
                    <h3 className="w3-opacity"><b>{education.school}</b> - {education.department}</h3>
                    <h4 className="w3-text-black">
                        <i className="fa fa-calendar fa-fw w3-margin-right w3-text-amber"/><em>{education.graduated}</em>
                    </h4>
                    <h4 className="w3-opacity">{education.degree}</h4>
                </div>
            });
        }

        return (
            <div>
                <section id="education">
                    <div className="w3-container">
                        <h2 className="w3-text-grey w3-padding-16">
                            <i className="fa fa-book fa-fw w3-margin-right w3-xxlarge w3-text-amber"/><b>Education</b>
                        </h2>
                        <div className="w3-container">{education}</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;