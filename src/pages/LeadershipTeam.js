import React from 'react';
import './LeadershipTeam.css'; // Assuming you are using CSS for styling

const LeadershipTeam = () => {
   

    return (
        <div className="leadership-team">
            <h2 className="leadership-title">Leadership Team</h2>
            <p className="leadership-description">
                We have assembled a dynamic and experienced team dedicated to driving our vision forward. 
                Our diverse backgrounds and complementary skill sets empower us to tackle challenges, innovate, 
                and deliver exceptional results. Here's an introduction to our key team members.
            </p>
            <div className="team-container">
            <div className="box">
            <img src="./Group330.png"></img>
              </div>
              <div className="box">
              <img src="./Group331.png"></img>
              </div>
              <div className="box">
              <img src="./Group332.png"></img>
              </div>
              <div className="box">
              <img src="./Group332.png"></img>
              
              </div>
            </div>

        </div>
    );
};

export default LeadershipTeam;
