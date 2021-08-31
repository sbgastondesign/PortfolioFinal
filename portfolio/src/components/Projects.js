/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';


class Project extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Recent Projects" />
                <div className="container">
                    <div className="row skills">
                        <div className="row one">
                            <div className="col-xs-4">
                                <h3>Fitness Tracker</h3>
                                <img className="skills-img" alt-text="fitness tacker" src={require('../assets/fitness-tracker.png')} />
                            </div>
                            <div className="col-xs-4">
                                <h3>Budget Tracker</h3>
                                <img className="skills-img" alt-text="Budget tacker" src={require('../assets/transaction2.png')} />
                            </div>
                            <div className="col-xs-4">
                                <h3>Battleship</h3>
                                <img className="skills-img" alt-text="Battleship" src={require('../assets/battleship.png')} />
                            </div>
                            <div className="col-xs-4">
                                <h3>Work Scheduler</h3>
                                <img className="skills-img" alt-text="Work Scheduler" src={require('../assets/scheduler.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;
