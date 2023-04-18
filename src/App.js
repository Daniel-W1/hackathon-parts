import './App.css';
import Jobfilter from './components/JobFilter/Jobfilter';
import Blogsection from './components/blogsection/Blogsection';
import Comp from './components/merged/Comp';

function App() {
  return (
    <div className="app">
      <Comp/>
      <Blogsection/>
      <Jobfilter/>
    </div>
  );
}

export default App;
