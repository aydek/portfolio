export const Vector1 = () => {
    return (
        <svg className="vector" width="493" height="1022" viewBox="0 0 493 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M197.5 0V142.5C199.667 164.667 215.2 210.7 260 217.5C316 226 417.5 147.5 468 229.5C508.4 295.1 484.833 407.5 468 455.5C438.667 506.833 357.5 594.1 267.5 532.5C177.5 470.9 72.3333 527.833 31 564C-12.5 614.5 -37.9 720.3 208.5 739.5C454.9 758.7 288.5 937.5 174.5 1024.5"
                stroke={localStorage.colorMode ? (localStorage.colorMode == 'dark' ? '#f5f5f5 ' : '#333') : '#f5f5f5'}
                strokeWidth="5"
            />
        </svg>
    );
};
