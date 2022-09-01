import { useEffect } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Vector1 = () => {
    const isSmallScreen = useMediaQuery('(max-width: 500px)');
    const style = {
        width: isSmallScreen ? '100%' : '500px',
        height: '500px',
        marginBottom: '-200px',
        marginTop: '-300px',
    } as React.CSSProperties;

    useEffect(() => {
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const scroll = () => {
        const path = document.querySelector('#vector1') as SVGPathElement;

        if (path) {
            console.log(document.documentElement.scrollTop);
            const pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = `${pathLength}`;

            const scrollPercentage = document.documentElement.scrollTop / document.documentElement.clientHeight;

            const drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = `${pathLength - drawLength}`;
        }
    };

    return (
        <svg className="vector" viewBox="0 0 493 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                style={{ transition: '200ms ease' }}
                id="vector1"
                d="M197.5 0V142.5C199.667 164.667 215.2 210.7 260 217.5C316 226 417.5 147.5 468 229.5C508.4 295.1 484.833 407.5 468 455.5C438.667 506.833 357.5 594.1 267.5 532.5C177.5 470.9 72.3333 527.833 31 564C-12.5 614.5 -37.9 720.3 208.5 739.5C454.9 758.7 288.5 937.5 174.5 1024.5"
                stroke={localStorage.colorMode ? (localStorage.colorMode == 'dark' ? '#f5f5f5 ' : '#333') : '#f5f5f5'}
                strokeWidth="5"
            />
        </svg>
    );
};
