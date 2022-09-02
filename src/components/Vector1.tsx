import { useEffect } from 'react';

export const Vector1 = ({ anchor, id, mt, mb }: { anchor: string; id: string; mt: string; mb: string }) => {
    useEffect(() => {
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const scroll = () => {
        const path = document.querySelector(`#${id}`) as SVGPathElement;
        const section = document.querySelector(anchor) as HTMLDivElement;
        if (path && section) {
            const pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = `${pathLength}`;
            path.style.opacity = '1';
            const scrollPercentage = section.getBoundingClientRect().top > 0 ? 0 : Math.abs(section.getBoundingClientRect().top) / section.offsetHeight;

            const drawLength = pathLength * 1.5 * scrollPercentage;
            console.log(section.getBoundingClientRect().top);
            path.style.strokeDashoffset = `${drawLength < pathLength ? pathLength - drawLength : 0}`;
        }
    };

    return (
        <svg style={{ marginTop: mt, marginBottom: mb }} className="vector" viewBox="0 0 493 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                id={id}
                d="M197.5 0V142.5C199.667 164.667 215.2 210.7 260 217.5C316 226 417.5 147.5 468 229.5C508.4 295.1 484.833 407.5 468 455.5C438.667 506.833 357.5 594.1 267.5 532.5C177.5 470.9 72.3333 527.833 31 564C-12.5 614.5 -37.9 720.3 208.5 739.5C454.9 758.7 288.5 937.5 174.5 1024.5"
                stroke={localStorage.colorMode ? (localStorage.colorMode == 'dark' ? '#f5f5f5 ' : '#333') : '#f5f5f5'}
                strokeWidth="5"
            />
        </svg>
    );
};
