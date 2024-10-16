// components/assignments/Assignment2.tsx
import React from 'react';
import AssignmentPage from '../AssignmentPage';

const Assignment2: React.FC = () => (
    <AssignmentPage
        title="Assignment 2"
        folder="a2"
        reportFilename="A2-Report.pdf" // Replace with actual filename
        presentationFilename="A2-Presentation.pdf" // Replace with actual filename
        videoFilename="A2-Video.mp4" // Replace with actual filename
    />
);

export default Assignment2;
