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
            <Vector1 anchor="#home" id="vector1" />
            <About />
            <Vector1 anchor="#about" id="vector2" />
            <Contacts />
        </ThemeProvider>
    );
}

export default App;
