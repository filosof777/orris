import './App.css';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import Store from './components/Pages/Store';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    
    </div>
  );
}

export default App;
