import "./App.css";
import { Routes, Route } from "react-router-dom";
import LobbyScreens from "./components/Screens/Lobby";
import Room from "./components/Screens/Room";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreens />}></Route>
        <Route path="/room/:roomId" element={<Room />}></Route>
      </Routes>
    </>
  );
}

export default App;
