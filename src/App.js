import React from "react";
import "./App.css";
// Установил и импортировал Helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ менять его (как и атрибуты страницы) на реакте.
// А еще подгружает скрипты. Нормально.
// Поставил еще React-Scrollable-Anchor для красивых якорей и плавного перемещения
import Header from './components/Header.jsx';
import Gallery from "./components/Gallery.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery/>
    </div>
  );
}

export default App;
