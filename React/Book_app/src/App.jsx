import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BookPage from "./Components/BookPage";
import StudentList from "./Components/StudentList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookPage />
      <StudentList />
    </>
  );
}

export default App;
