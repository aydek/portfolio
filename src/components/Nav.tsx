import { useEffect, useState } from 'react';
import SmoothScrolling from '../hooks/scroll';
import '../style/Nav.scss';

export const Nav = () => {
    const [navIndex, setNavIndex] = useState(0);

    useEffect(() => {
        const pages = document.querySelectorAll('.section');
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.value.includes('home')) entry.target.classList.add('active'), setNavIndex(0);
                        if (entry.target.classList.value.includes('about')) entry.target.classList.add('active'), setNavIndex(1);
                        if (entry.target.classList.value.includes('contacts')) entry.target.classList.add('active'), setNavIndex(2);
                    }
                });
            },
            { root: null, threshold: 0.5 }
        );
        pages.forEach((page) => {
            observer.observe(page);
        });
        return () => {
            pages.forEach((page) => {
                observer.unobserve(page);
            });
        };
    }, []);

    return (
        <div className="nav__body">
            <div
                style={{ color: navIndex == 0 ? '#008b8b' : '' }}
                onClick={() => {
                    SmoothScrolling.scrollTo('home', () => {});
                }}
            >
                Home
            </div>
            <div
                style={{ color: navIndex == 1 ? '#008b8b' : '' }}
                onClick={() => {
                    SmoothScrolling.scrollTo('about', () => {});
                }}
            >
                About
            </div>
            <div
                style={{ color: navIndex == 2 ? '#008b8b' : '' }}
                onClick={() => {
                    SmoothScrolling.scrollTo('contacts', () => {});
                }}
            >
                Contacts
            </div>
        </div>
    );
};
