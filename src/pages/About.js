import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/ProfilePic.png';
import './About.css';  
export default class About extends Component {
  render() {
    return (
        <div>
            <div class="split left">
              <div className="centered">
                  <img 
                    className="profile_image"
                    // Image goes here
                    src= {profilePic}
                    alt="Profile Pic"
                  ></img>
              </div>
            </div>
          <div className="split right">
              <div className="centered">
                <div className="name_title">Kniledge Johns</div>
                <div className="brief_description">
                  {/* Details about you goes here */}
                  <ul>
                    <li>I attend Stephen F. Austin University</li>
                    <li>I hold a officer position for <abbr title='Stephen F. Austin University'>SFA</abbr> rugby and play Winger as a position.</li>
                    <li>I graduated highschool and obtained my associates at the same time.</li>
                  </ul>
                </div>
            </div>
          </div>
        </div> 
    )
  }
} 