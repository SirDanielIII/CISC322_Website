// components/HomePage.tsx
import React from 'react';
import AssignmentButtons from './AssignmentButtons';
import AboutCard from './AboutCard';
import {aboutTeamMembers} from '../data/aboutTeamMembers';

const HomePage: React.FC = () => (
    <>
        <div className="card">
            <h1>Weekend Development</h1>
            <h2>
                Investigating{' '}
                <a href="https://www.scummvm.org/" target="_blank" rel="noreferrer">
                    ScummVM
                </a>
            </h2>
            <p>CISC 322 Software Architecture (2024 Fall)</p>
            <div className="card-buttons">
                <AssignmentButtons/>
            </div>
        </div>
        <div className="about-us">
            <h2>About Us</h2>
            <div className="about-us-cards">
                {aboutTeamMembers.map(member => (
                    <AboutCard key={member.name} {...member} />
                ))}
            </div>
        </div>
    </>
);

export default HomePage;
