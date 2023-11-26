import { useState, useEffect } from 'react'
import TodoList from './TodoList';
import sunImg from './assets/sun.png'
import frogImage from './assets/frog.png';
import backgroundVideo from './assets/backgroundloop.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState(formatDateTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatDateTime(date) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    const suffix = getDateSuffix(dateNum);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute < 10 ? '0' + minute : minute;

    return `today is ${day} the ${dateNum}${suffix} of ${month}. it's currently ${formattedHour}:${formattedMinute} ${ampm}.`;
  }

  function getDateSuffix(dateNum) {
    if (dateNum > 3 && dateNum < 21) return 'th';
    switch (dateNum % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  }

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content">
        <a href="">
          <img src={sunImg} className="logo sun" alt="Sun logo" />
        </a>
      </div>
      <h1>welcome to my todo app!</h1>
      <h2>{currentTime}</h2>
      <TodoList />

      <div className="sticky-footer">
        <a href="https://github.com/CodersforLearning/react-todo-app-lumenesce" target="_blank">
          <img src={frogImage} alt="Frog" className="footer-image" />
        </a>
        <p className="footnote">
        follow the frog prince to see the source code! :)
      </p>
      </div>
    </div>
  )
}

export default App
