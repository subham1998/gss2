import React, { useState } from 'react';
import Modal from 'react-modal';
import Img from 'react-image-pan-zoom-rotate';
import Image from 'next/image';

const ImagePopup = ({ imageUrl, isPopupOpen }: { imageUrl: string, isPopupOpen: Function }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        isPopupOpen(true)
    };

    const closeModal = () => {
        setModalIsOpen(false);
        isPopupOpen(false)
    };

    return (
        <div>
            <Image
                height={500}
                width={500}
                src={imageUrl}
                alt="Click me"
                style={{ cursor: 'pointer', width: '100%' }}
                onClick={openModal}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: "80%",
                        width: "80%",
                        maxWidth: '90%',
                        maxHeight: '90%',
                    }
                }}
            >
                <div
                    style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}
                >
                    <Img
                        image={imageUrl}
                        alt="Popup Image"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ImagePopup;
