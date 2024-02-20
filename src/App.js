import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/main.js'
import Check from './component/check'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/admin" element={<Check />} />
      </Routes>
    </Router>
  );
}

export default App;
