import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add some basic global styles for 3D preservation that Tailwind doesn't strictly cover by default in all versions
const style = document.createElement('style');
style.textContent = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
`;
document.head.appendChild(style);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
