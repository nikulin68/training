import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className="task-title training-title">Учёт тренировок</div>
      <Container workouts={[]} />
    </>
  );
}

export default App;
