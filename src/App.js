import './App.css';
import Useravatar from './components/Avatar/Avatar';
import TaskCard from './components/TaskCard';
import Card from './components/Card/Card';
import Jobfilter from './components/JobFilter/Jobfilter';
import Skills from './components/Skills/skills';
import Table from './components/Table';
import Welcome from './components/Welcome/Welcome';
import Blogsection from './components/blogsection/Blogsection';
import Comp from './components/merged/Comp';
import Tasks from './components/Tasks';

function App() {

  
  return (
    <div className="app">
      <Comp/>

      <Blogsection/>
      <Table/>
      {/* <Jobfilter/> */}
      {/* <Skills/> */}
      <Useravatar/>
      {/* <TaskCard {...task}/> */}
      <Tasks/>  
    </div>
  );
}

export default App;
