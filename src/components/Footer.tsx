import '../style/Footer.scss';
import { ReactLogo } from './icons/ReactLogo';
import { Sass } from './icons/Sass';
import { Typescript } from './icons/Typescript';
import { Vite } from './icons/Vite';

export const Footer = () => {
    return (
        <div className="footer__body">
            <div className="inner">
                <p>Powered by:</p>
                <div className="tools__logo">
                    <Vite />
                    <ReactLogo />
                    <Typescript />
                    <Sass />
                </div>
            </div>
        </div>
    );
};
