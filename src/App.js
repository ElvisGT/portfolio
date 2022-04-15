import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Home} from './components/Home/Home';
import {Services} from './components/Services/Services';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="Container">
        <Home />
        <Services />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
