import React, {Component} from 'react';

class Projects extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map((project) => {
                var image = 'images/projects/' + project.image;
                return <div key={project.title} className="w3-container">
                    <div className="w3-center">
                        <h3><b><a href={project.url}>{project.title}</a></b></h3>
                        <a href={project.url}> <img src={image} alt={project.description} className="w3-hover-opacity"/></a>
                    </div>
                    <div className="w3-container w3-white">
                        <p><b>Tags:</b> {project.tags}</p>
                        <p>{project.description}</p>
                    </div>
                </div>
            });
        }

        return (
            <div>
                <section id="projects">
                    <div class="w3-row-padding">
                        <h2 className="w3-text-grey w3-padding-16">
                            <i className="fa fa-cogs fa-fw w3-margin-right w3-xxlarge w3-text-black"/><b>My projects</b>
                        </h2>
                        <div className="w3-row">{projects}</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;