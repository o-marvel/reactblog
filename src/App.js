import './App.css';
import BlogApp from './blog/blogapp';
 import TodoApp from './component/todoapp';
import './bootstrap/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <TodoApp />
      <BlogApp />
    </div>
  );
}

export default App;
