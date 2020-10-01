import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import StateComp from './stateCom';
import Head from './head';
//import Header first letter capital we can take any name better if you take component name to avoid confusion
function App() {
  return (
   
     //here div must be there
    <div className="App">
    <h1>Good morning</h1>
    <p>Welcome to apssdc</p>
    <Header/>
    <Footer/>
    <Head name="surya">
    <p>I am learning HTML5</p>
    <p>This is surya</p>
    </Head>

    <Head name="gayatri">
    <p>I am learning bootstrap</p>
    <p>This is venkat</p>
    </Head>

    <StateComp></StateComp>

    </div>

  );
}

export default App;
