
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout';

  const App = () => { 
 

  return (
    
     <Router>
        <Routes>
           <Route
            path="/"
             element={
             <Layout>
            <p>Home page</p>
           </Layout>} />
           <Route path="/search" element={<>Search Page</>} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     </Router>
  );
}

export default App
