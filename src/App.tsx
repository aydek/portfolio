import ThemeProvider from './ThemeProvider';

import { Home } from './components/Home';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { Contacts } from './components/Contacts';
import { Vector1 } from './components/Vector';

function App() {
    return (
        <ThemeProvider>
            <Nav />
            <Home />
            <Vector1 anchor="#home" id="vector1" height="60vh" mt="-35vh" />
            <About />
            <Vector1 anchor="#about" id="vector2" height="50vh" mt="-25vh" />
            <Contacts />
        </ThemeProvider>
    );
}

export default App;
