import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate // Import Navigate for redirection
} from "react-router-dom";
import Login from './components/Login'
import Feed from './components/Feed';
import './MStyle.css';
import Upload from './components/Upload'
import LeftPart from './components/LeftPart'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} /> {/* Redirect to Login page */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/Upload" element={<Upload />}/>
          <Route path="/LeftPart" element={<LeftPart />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
