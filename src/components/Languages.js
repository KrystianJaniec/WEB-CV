import React, {Component} from 'react';

class Languages extends Component {
    render() {
        if (this.props.data) {
            var languages = this.props.data.languages.map((language) => {
                return <div>
                    <h5>{language.name}</h5>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-blue"
                             style={{width: language.level}}>{language.level}</div>
                    </div>
                </div>
            });
        }
        return (
            <div>
                <section id="languages">
                    <div className="w3-container">
                        <h2 className="w3-center "><i class="fa fa-globe fa-fw w3-margin-right w3-text-blue"/>Languages
                        </h2>{languages}
                    </div>
                    <hr/>
                </section>
            </div>
        );
    }
}

export default Languages;