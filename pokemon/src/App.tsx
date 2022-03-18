import React from 'react';
import TextField from '@mui/material/TextField';
import './App.css';

function App() : JSX.Element {
  return (
    <React.Fragment>
      <header>
        <div className="container py-5">
          <TextField fullWidth label="Buscar..." id="search" />
        </div>
      </header>
    </React.Fragment>
  );
}

export default App;
