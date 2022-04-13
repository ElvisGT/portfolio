import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Home} from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="Container">
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
