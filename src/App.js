import React from 'react';
// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './SASS/styles.sass';
import Layout from "./components/layout/Layout";

// FontAwesome  
library.add(fab, faLink)



function App() {
  return (
    <Layout />
  );
}

export default App;
