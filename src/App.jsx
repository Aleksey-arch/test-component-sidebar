import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';
import { theme } from './styles/theme.js';

library.add(fas);

const App = () => {
  const [isDarkMode] = useState(false);
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <>
      <Sidebar theme={currentTheme} />
    </>
  );
};
export default App;
