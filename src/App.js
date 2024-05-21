import './App.module.css';
import './utils/theme.css';
import Footer from './components/Footer/Footer';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
