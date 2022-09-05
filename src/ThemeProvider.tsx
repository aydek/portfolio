import { MoonIcon } from '@heroicons/react/24/outline';
import { ReactNode, useEffect, useState } from 'react';
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
            <div id="background__fix"></div>
            <div onClick={handleClick} style={containerStyle}>
                <MoonIcon style={iconStyle} width={26} height={26} />
            </div>
            {props.children}
        </div>
    );
}

export default ThemeProvider;
