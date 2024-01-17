import React, { useEffect, useRef, useState } from 'react';
import '../styles/slider-component.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const slides = [{ id: 1, text: 'DİJİTAL PAZARLAMANIN GÜCÜNÜ HERKESE ULAŞTIRMAYI HEDEFLİYORUZ...' }];

const SliderComponent = () => {
    const textRef = useRef(null);
    const textContinueRef = useRef(null);
    const [isArrowVisible, setIsArrowVisible] = useState(null);

    useEffect(() => {
        const textElement = textRef.current;

        if (textElement) {
            startTypewriter(textElement, () => {
                const textContinueElement = textContinueRef.current;
                startTypewriter(textContinueElement, () => {
                    // Callback when typewriter for text-continue ends
                    startFadeInOut([textElement, textContinueElement]);
                    setIsArrowVisible(true); // Hide the arrow after the event
                });
            });
        }
    }, []);

    const startTypewriter = (element, callback) => {
        if(element !== null ){
            const text = element.getAttribute('data-text');
            if (text !== null && text !== undefined) {
                const speed = 60;
                let i = 0;

                function typeWriterRecursive() {
                    element.textContent = text.substring(0, i);
                    i++;
                    if (i <= text.length) {
                        setTimeout(typeWriterRecursive, speed);
                    } else {
                        callback(); // Trigger the callback when typewriter ends
                    }
                }

                typeWriterRecursive();
            } else {
                console.error("data-text attribute is missing");
            }
        }

    };

    const startFadeInOut = (elements) => {
        elements.forEach(element => element.classList.add('fadeInOutAnimation'));
    };

    return (
        <div className="slider-item">
            <div className="slider-text-box">
                <h1 ref={textRef} className="slide-text" data-text={slides[0].text} />
                <div className="slide-continue">
                    <div className="text-continue">
                        <h1 ref={textContinueRef} data-text="NASIL MI?"></h1>
                    </div>
                    {isArrowVisible && <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />}
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;
