import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  Dashboard,
  Error,
  Register,
  Landing
} from './pages/Index'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
