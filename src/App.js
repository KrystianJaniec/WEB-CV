import React, {Component} from 'react';
import $ from 'jquery';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Work from "./components/Work";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    getData() {
        $.ajax({
            url: 'http://localhost:3000/data.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (error) {
                console.log(error);
                alert(error);
            }
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <Header data={this.state.data.main}/>
                <div class="w3-margin-top">
                    <div class="w3-row-padding">
                        <div className="w3-third">
                            <div className="w3-white w3-text-black w3-card-4">
                                <div className="w3-row-padding">
                                    <About data={this.state.data.main}/>
                                    <Skills data={this.state.data.resume}/>
                                    <Languages data={this.state.data.resume}/>
                                </div>
                            </div>
                        </div>

                        <div className="w3-twothird">
                            <div className="w3-white w3-text-black w3-card-4">
                                <div className="w3-row-padding">
                                    <Education data={this.state.data.resume}/>
                                    <Work data={this.state.data.resume}/>
                                    <Projects data={this.state.data.portfolio}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer data={this.state.data.main}/>
            </div>
        );
    }
}

export default App;
