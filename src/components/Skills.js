import React, {Component} from 'react';

class Skills extends Component {
    render() {
        if (this.props.data) {
            var skills = this.props.data.skills.map((skill) => {
                return <div>
                    <h5>{skill.name}</h5>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-green"
                             style={{width: skill.level}}>{skill.level}</div>
                    </div>
                </div>
            });
        }
        return (
            <div>
                <section id="skills">
                    <div className="w3-container">
                        <h2 className="w3-center "><i class="fa fa-tasks fa-fw w3-margin-right w3-text-green"/>Skills
                        </h2>{skills}
                    </div>
                    <hr/>
                </section>
            </div>
        );
    }
}

export default Skills;