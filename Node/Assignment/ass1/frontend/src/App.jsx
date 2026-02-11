import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const writeComment = async () => {
    if (!text) return;

    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    setText("");
  };

  const readComments = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setComments(data.comments);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle"></div>
          <span>ABES</span>
        </div>
        <span>Home</span>
      </nav>

      <div className="container">
        <h1>FS Model for Node</h1>

        <input
          className="text-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter comment..."
        />

        <div className="btn-group">
          <button onClick={writeComment}>FS Create / Write</button>
          <button onClick={readComments}>FS Read</button>
        </div>

        {/* COMMENTS SECTION */}
        <div className="comments">
          {comments.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
