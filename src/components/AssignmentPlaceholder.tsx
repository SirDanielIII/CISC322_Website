// components/AssignmentPlaceholder.tsx
import React from 'react';
import {useNavigate} from 'react-router-dom';

interface AssignmentPlaceholderProps {
    title: string;
}

const AssignmentPlaceholder: React.FC<AssignmentPlaceholderProps> = ({title}) => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <h1>{title}</h1>
            <p>Coming soon to a website near you.</p>
            <button className="back-button" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    );
};

export default AssignmentPlaceholder;
