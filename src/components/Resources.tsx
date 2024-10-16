// components/Resources.tsx
import React from 'react';
import {useNavigate} from 'react-router-dom';

const resourcesList = [
    {
        text: 'ScummVM',
        href: 'https://www.scummvm.org/',
        date: 'Retrieved October 7, 2024.',
    },
    {
        text: 'ScummVM Documentation',
        href: 'https://docs.scummvm.org/en/v2.8.0/',
        date: 'Retrieved October 6, 2024.',
    },
    {
        text: 'ScummVM Wiki',
        href: 'https://wiki.scummvm.org/index.php?title=Main_Page',
        date: 'Retrieved October 9, 2024.',
    },
    {
        text: 'ScummVM API Documentation',
        href: 'https://doxygen.scummvm.org/',
        date: 'Retrieved October 9, 2024.',
    },
    {
        text: 'About ScummVM',
        href: 'https://wiki.scummvm.org/index.php?title=About',
        date: '',
    },
    {
        text: 'ScummVM Overview',
        href: 'https://www.scummvm.org/#:~:text=ScummVM%20is%20a%20program%20which,which%20they%20were%20never%20designed!',
        date: '',
    },
    {
        text: 'ScummVM Bug Tracker',
        href: 'https://bugs.scummvm.org/',
        date: '',
    },
    {
        text: 'Developer Central',
        href: 'https://wiki.scummvm.org/index.php?title=Developer_Central',
        date: '',
    },
    {
        text: 'Modular Backends',
        href: 'https://wiki.scummvm.org/index.php?title=Modular_Backends&mobileaction=toggle_view_desktop',
        date: '',
    },
    {
        text: 'SCUMM Virtual Machine',
        href: 'https://wiki.scummvm.org/index.php?title=SCUMM/Virtual_Machine&mobileaction=toggle_view_desktop',
        date: '',
    },
];

const Resources: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="resources">
            <h1>Resources</h1>
            <div className="resource-links">
                <ul>
                    {resourcesList.map(({text, href, date}) => (
                        <li key={href}>
                            <a href={href} target="_blank" rel="noreferrer">
                                {text}
                            </a>
                            {date && `. (${date})`}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="back-button" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    );
};

export default Resources;
