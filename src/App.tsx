import ThemeProvider from './ThemeProvider';

import { Home } from './components/Home';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { Contacts } from './components/Contacts';

function App() {
    return (
        <ThemeProvider>
            <Nav />
            <Home />
            <About />
            <Contacts />
        </ThemeProvider>
    );
}

export default App;
