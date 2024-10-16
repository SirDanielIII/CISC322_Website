// components/assignments/Assignment1.tsx
import React from 'react';
import AssignmentPage from '../AssignmentPage';

const Assignment1: React.FC = () => (
    <AssignmentPage
        title="Assignment 1"
        folder="a1"
        reportFilename="A1-Conceptual_Architecture_Report.pdf"
        presentationFilename="A1-Conceptual_Architecture_Presentation.pdf"
        videoFilename="A1-VideoPresentation.mp4"
    />
);

export default Assignment1;
