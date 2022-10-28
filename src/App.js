import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunClick from './Components/functionClick';
import ClassClick from './Components/classClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/parentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './Components/appStyles.module.css'
import Form from './Components/form';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      <Form />
      {/* <ClassClick /> */}
      {/* <FunClick /> */}
      {/* <Greet /> */}
      {/* <Greet name="Meru" heroname="Superman" />
      <Greet name="David" heroname="Thor" />
      <Greet name="Daniel" heroname="Flash" /> */}
      {/* <Welcome /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <NameList />
      <UserGreeting /> */}
      
    </div>
  );
}

export default App;
