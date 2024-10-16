// components/AssignmentPage.tsx
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../css/AssignmentPage.css';

interface AssignmentPageProps {
    title: string;
    folder: string;
    reportFilename: string;
    presentationFilename: string;
    videoFilename: string;
}

const AssignmentPage: React.FC<AssignmentPageProps> = ({
                                                           title,
                                                           folder,
                                                           reportFilename,
                                                           presentationFilename,
                                                           videoFilename,
                                                       }) => {
    const navigate = useNavigate();

    const assetPath = `/cisc322/${folder}`;
    const [pdfLoaded, setPdfLoaded] = useState(false);

    useEffect(() => {
        // Set a timeout to simulate loading (since onLoad may not fire reliably)
        const timer = setTimeout(() => {
            setPdfLoaded(true);
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    // const openPDFInNewTab = (pdfUrl: string) => {
    //     window.open(pdfUrl, '_blank');
    // };

    return (
        <div className="assignment-page">
            <h1>{title}</h1>

            {reportFilename && (
                <div className="pdf-container">
                    <h2>Report</h2>
                    <div className="pdf-viewer">
                        {!pdfLoaded && (
                            <div className="pdf-loading">
                                Loading PDF...
                            </div>
                        )}
                        <object
                            data={`${assetPath}/${reportFilename}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        >
                            <p>
                                It appears you don't have a PDF plugin for this browser. You can{' '}
                                <a href={`${assetPath}/${reportFilename}`}>click here to download the PDF</a>
                            </p>
                        </object>
                    </div>
                    {/*<button onClick={() => openPDFInNewTab(`${assetPath}/${reportFilename}`)}>*/}
                    {/*    Open in New Tab*/}
                    {/*</button>*/}
                </div>
            )}

            {presentationFilename && (
                <div className="pdf-container">
                    <h2>Presentation</h2>
                    <div className="pdf-viewer">
                        {!pdfLoaded && (
                            <div className="pdf-loading">
                                Loading PDF...
                            </div>
                        )}
                        <object
                            data={`${assetPath}/${presentationFilename}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        >
                            <p>
                                It appears you don't have a PDF plugin for this browser. You can{' '}
                                <a href={`${assetPath}/${reportFilename}`}>click here to download the PDF</a>
                            </p>
                        </object>
                    </div>
                    {/*<button onClick={() => openPDFInNewTab(`${assetPath}/${presentationFilename}`)}>*/}
                    {/*    Open in New Tab*/}
                    {/*</button>*/}
                </div>
            )}

            {videoFilename && (
                <div className="video-container">
                    <h2>Video Presentation</h2>
                    <div className="video-player">
                        <ReactPlayer
                            url={`${assetPath}/${videoFilename}`}
                            controls
                            width="100%"
                            height="100%"
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: 'nodownload',
                                        onContextMenu: (e: React.MouseEvent<HTMLVideoElement>) => e.preventDefault(),
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            )}

            <button className="back-button" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    );
};

export default AssignmentPage;
