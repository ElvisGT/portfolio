import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Home} from './components/Home/Home';
import {Services} from './components/Services/Services';
import {Blog} from './components/Blog/Blog';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="Container">
        <Home />
        <Services />
        <Blog />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
