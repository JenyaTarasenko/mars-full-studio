// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
 {/* Любой другой путь → NotFound   нужно прописать путь */}
//  <Route path="*" element={<NotFound />} />

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px'
    }}>
        <img src="/image/page.svg" />
      <h1 style={{ fontSize: '100px', color: '#ff6b6b', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '24px', color: '#333', marginBottom: '30px' }}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          fontSize: '20px',
          color: '#007bff',
          border: '1px solid #007bff',
          padding: '10px 20px',
          borderRadius: '5px',
          transition: '0.3s'
        }}
        onMouseOver={e => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.color = '#fff';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#007bff';
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;