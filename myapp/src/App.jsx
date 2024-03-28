import "./App.css";

function App() {
  const role = ["Python", "React", "Django", "UI/UX"];

  const getRole = () => {
    let randInt = Math.floor(Math.random() * 3);
    return role[randInt];
  };
  return (
    <>
      <h1>Hello from Arun</h1>
      <p>
        Im a <strong>{getRole()}</strong> developer.
      </p>
    </>
  );
}

export default App;
