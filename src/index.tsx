import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';
import Todo from './props/Todo';
import './index.css';
// const el = document.getElementById(" root");
// const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div className="px-20 py-10">
      <Todo />
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
