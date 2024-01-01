import { useState } from "react";

export function Parameters(){
    const [theme, setTheme] = useState('dark');
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
  
    return (
      <div>
        <h2>Parameters</h2>
        <div>
          <label>Theme:</label>
          <button onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
        {/* Add more parameter options as needed */}
      </div>
    );
};