// components/AssignmentButtons.tsx
import React from 'react';
import {Link} from 'react-router-dom';
import {assignments} from '../data/assignmentsData';

const AssignmentButtons: React.FC = () => (
    <div className="buttons-container">
        {assignments.map(({id, label}) => (
            <Link to={`/${id}`} key={id} className="button">
                {label}
            </Link>
        ))}
    </div>
);

export default AssignmentButtons;
