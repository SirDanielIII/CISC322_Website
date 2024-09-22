import React, {useEffect, useState} from 'react';
import './App.css';

const App: React.FC = () => {
    const [currentContent, setCurrentContent] = useState<number>(0);

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            setCurrentContent(event.state as number || 0);
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const renderAssignment = () => {
        switch (currentContent) {
            case 1:
                return <Assignment1/>;
            case 2:
                return <Assignment2/>;
            case 3:
                return <Assignment3/>;
            case 4:
                return <Resources/>;
            default:
                return null;
        }
    };

    const navigateTo = (newContent: number) => {
        setCurrentContent(newContent);
        window.history.pushState(newContent, '', '');
    };

    return (
        <>
            {renderAssignment() ?? (
                <>
                    <div className="card">
                        <h1>Weekend Development</h1>
                        <h2>
                            Investigating <a href="https://www.scummvm.org/" target="_blank" rel="noreferrer">ScummVM</a>
                        </h2>
                        <p>CISC 322 Software Architecture (2024 Fall)</p>
                        <div className="card-buttons">
                            <AssignmentButtons setCurrentContent={navigateTo}/>
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
            )}
            {currentContent > 0 && (
                <button className="back-button" onClick={() => navigateTo(0)}>
                    Back
                </button>
            )}
        </>
    );
};

const AssignmentButtons: React.FC<{ setCurrentContent: (content: number) => void }> = ({setCurrentContent}) => (
    <div className="buttons-container">
        {[1, 2, 3].map(num => (
            <button key={num} onClick={() => setCurrentContent(num)} className="button">
                Assignment {num}
            </button>
        ))}
        {[4].map(num => (
            <button key={num} onClick={() => setCurrentContent(num)} className="button">
                Resources
            </button>
        ))}
    </div>
);

const AboutCard: React.FC<{ name: string; quote: string; role: string; github: string; }> = ({name, quote, role, github}) => (
    <a href={github} target="_blank" rel="noopener noreferrer" className="about-card" style={{textDecoration: 'none', color: 'inherit'}}>
        <h3>{name}</h3>
        <div className="text-container">
            <p className="quote">{quote}</p>
            <h4 className="role">{role}</h4>
        </div>
    </a>
);


// Example content for assignments
const Assignment1: React.FC = () => <div className="content"><h1>Assignment 1</h1><p>Coming to a crappy website sometime soon.</p></div>;
const Assignment2: React.FC = () => <div className="content"><h1>Assignment 2</h1><p>Coming to a crappy website sometime soon.</p></div>;
const Assignment3: React.FC = () => <div className="content"><h1>Assignment 3</h1><p>Coming to a crappy website sometime soon.</p></div>;
const Resources: React.FC = () => <div className="content"><h1>Resources</h1><p>Daniel is currently too lazy to finish this section.</p></div>;

const aboutTeamMembers = [
    {name: "Aleeza Johanna", quote: "Yeet.", role: "Cooked", github: "https://github.com/leezeleeze"},
    {name: "Daniel Frankel", quote: "Likes Minecraft.", role: "YouTuber", github: "https://github.com/danielfrankel"},
    {name: "Daniel Zhuo", quote: "Sleeping my fix schedule.", role: "Unemployed", github: "https://github.com/SirDanielIII"},
    {name: "Ethan Goldberg", quote: "Yeet.", role: "[Put Role Here]", github: "https://github.com/ethangoldberg13"},
    {name: "Jacob Phillipson", quote: "Yeet.", role: "[Put Role Here]", github: "https://github.com/Jacobzsp"},
    {name: "Joel Mills", quote: "Yeet.", role: "[Put Role Here]", github: "https://github.com/joelmills2"},
];

export default App;
