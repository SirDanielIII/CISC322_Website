// components/AboutCard.tsx
import React from 'react';

interface AboutCardProps {
    name: string;
    quote: string;
    role: string;
    github: string;
}

const AboutCard: React.FC<AboutCardProps> = ({name, quote, role, github}) => (
    <a href={github} target="_blank" rel="noopener noreferrer" className="about-card">
        <h3>{name}</h3>
        <div className="text-container">
            <p className="quote">{quote}</p>
            <h4 className="role">{role}</h4>
        </div>
    </a>
);

export default AboutCard;
