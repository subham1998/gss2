// components/WorkDone.js
import { useState, useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf.min.mjs';
import Worker from 'pdfjs-dist/build/pdf.worker.min.mjs';
import styles from './WorkDone.module.scss';

const WorkDone = ({ pdfPath }: { pdfPath: any }) => {
    const [pdfDocument, setPdfDocument] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const canvasRefs = useRef<Array<HTMLCanvasElement | null>>([]);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                pdfjs.GlobalWorkerOptions.workerSrc = Worker;
                const loadingTask = pdfjs.getDocument(pdfPath);
                const pdfDoc = await loadingTask.promise;
                setPdfDocument(pdfDoc);
                setTotalPages(pdfDoc.numPages);
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
        };

        loadPdf();
    }, [pdfPath]);

    useEffect(() => {
        canvasRefs.current = Array(totalPages).fill(null).map((_, index) => canvasRefs.current[index] || null);
    }, [totalPages]);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleDownload = async () => {
        if (pdfDocument) {
            const blob = await pdfDocument.getData();
            const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = '9 Years of Governance.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        }
    };

    useEffect(() => {
        const loadPage = async (pageNumber: number) => {
            if (pdfDocument) {
                try {
                    const page = await pdfDocument.getPage(pageNumber);
                    const canvas = canvasRefs.current[pageNumber - 1];
                    if (canvas) {
                        const context = canvas.getContext('2d');
                        const viewport = page.getViewport({ scale: 1 });
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;
                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };
                        page.render(renderContext);
                    }
                } catch (error) {
                    console.error(`Error loading page ${pageNumber}:`, error);
                }
            }
        };

        loadPage(currentPage);
    }, [pdfDocument, currentPage]);

    return (
        <div className='position-relative'>
            <div className={`${styles.downloadButton} position-absolute`}>
                <button type="button" className="btn btn-outline-secondary" onClick={handleDownload}>
                    Download
                    <i className="fa-solid fa-download ms-2"></i>
                </button>
            </div>
            <div className={`${styles.prevButton} position-absolute`}>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <i className="fa-solid fa-backward"></i>
                </button>
                d</div>
            <div className={styles.pdfContainer}>
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index + 1}
                        className={styles.pdfPage}
                        style={{
                            transform: `rotateY(0deg) scaleX(${currentPage === index + 1 ? '1' : '0'})`,
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <canvas
                            className={styles.pdfCanvas}
                            id={`pdfCanvas${index + 1}`}
                            ref={(canvas) => (canvasRefs.current[index] = canvas)}
                        ></canvas>
                    </div>
                ))}
            </div>
            <div className={`${styles.nextButton} position-absolute`}>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    <i className="fa-solid fa-forward"></i>
                </button>
            </div>
            {/* <div style={{ marginTop: '10px' }}>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span style={{ margin: '0 10px' }}>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next Page
                </button>
                <button onClick={handleDownload} style={{ marginTop: '10px' }}>
                    Download as PDF
                </button>
            </div> */}
        </div>
    );
};

export default WorkDone;
