import './style/index.css';
import Index from './pages/Index';
import DetailPage from './pages/DetailPage'
import { Routes, Route } from 'react-router-dom';
import Form from './componenets/Form';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path="/:id" element={<DetailPage />} />
          <Route exact path="/add-movie" element={<Form />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </main>

  );
}

export default App;
