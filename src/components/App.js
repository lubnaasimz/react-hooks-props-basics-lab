import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Your Name",
  city: "Your City",
  bio: "This is a short bio about me.",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
