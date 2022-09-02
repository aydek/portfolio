import ThemeProvider from './ThemeProvider';

import { Home } from './components/Home';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { Contacts } from './components/Contacts';
import { Vector1 } from './components/Vector1';

function App() {
    return (
        <ThemeProvider>
            <Nav />
            <Home />
            <Vector1 anchor="#home" id="vector1" mt="-30vh" mb="-20vh" />
            <About />
            <Vector1 anchor="#about" id="vector2" mt="-20vh" mb="-30vh" />
            <Contacts />
        </ThemeProvider>
    );
}

export default App;
