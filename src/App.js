import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import About from './pages/About/About'
import RecentPosts from './pages/RecentPosts/RecentPosts'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
        
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recent-posts" element={<RecentPosts />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
        
    </Router>
  );
}

export default App;
