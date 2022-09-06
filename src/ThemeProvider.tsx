import { MoonIcon } from '@heroicons/react/24/outline';
import { ReactNode, useEffect, useState } from 'react';
import { setTextAnimation } from './hooks/setTextAnimation';
import { useMediaQuery } from './hooks/useMediaQuery';

import './style/index.scss';

function ThemeProvider(props: { children: ReactNode }) {
    const isSmallScreen = useMediaQuery('(max-width: 700px)');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(localStorage.colorMode ? localStorage.colorMode : 'dark');

    useEffect(() => {
        if (!localStorage.colorMode && prefersDark) {
            setTheme('dark');
        }
        localStorage.colorMode = theme;
        console.log(`Current theme: ${theme}`);
    }, [theme]);

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        setTextAnimation('#startup__path', 0.5, 1.5, 2.5, 'ease-out', '#00b6b6', false);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const mouseMove = (event: MouseEvent | any) => {
        if (window.event) {
            event = window.event;
        }

        const mousex = event.clientX;
        const mousey = event.clientY;
        const body = document.getElementById('background__fix');

        if (body) {
            if (isSmallScreen) body.style.backgroundPosition = '0px 0px';
            else body.style.backgroundPosition = `${100 - mousex / 3 / (window.innerWidth / 15)}% ${mousey / 3 / (window.innerHeight / 50)}px`;
        }
    };

    const iconStyle = {
        transform: theme === 'light' ? 'rotate(180deg)' : '',
        transition: '200ms ease',
    } as React.CSSProperties;

    const containerStyle = {
        cursor: 'pointer',
        position: 'fixed',
        right: '1rem',
        top: isSmallScreen ? '' : '0.8rem',
        bottom: isSmallScreen ? '0.8rem' : '',
        width: 'max-content',
        zIndex: '99',
    } as React.CSSProperties;

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="body" id="body" data-theme={theme} style={{ width: '100%', height: '100%' }}>
            <div id="start__animation">
                <svg width="57.959" height="71.094" viewBox="0 0 85.779 105.219" xmlns="http://www.w3.org/2000/svg">
                    <g
                        id="svgGroup"
                        stroke-linecap="round"
                        fill-rule="evenodd"
                        font-size="9pt"
                        stroke="#000"
                        stroke-width="0.25mm"
                        fill="none"
                        style={{ stroke: '#000', strokeWidth: '0.25mm', fill: 'none' }}
                    >
                        <path
                            d="M 59.98 105.219 L 32.953 63.016 L 21.68 75.156 L 21.68 105.219 L 0 105.219 L 0 0 L 21.68 0 L 21.68 47.695 L 31.219 34.615 L 58.029 0 L 84.695 0 L 47.334 46.756 L 85.779 105.219 L 59.98 105.219 Z"
                            id="startup__path"
                            vector-effect="non-scaling-stroke"
                        />
                    </g>
                </svg>
            </div>
            <div id="background__fix"></div>
            <div onClick={handleClick} style={containerStyle}>
                <MoonIcon style={iconStyle} width={26} height={26} />
            </div>
            {props.children}
        </div>
    );
}

export default ThemeProvider;
