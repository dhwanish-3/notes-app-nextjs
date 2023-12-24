"use client";
import LoginPopUp from "./login/page";
import NotesPage from "./notes/page";

export default function Home() {
  const handleClick = () => {
    document.querySelector(".avatar-popup ")?.classList.add("show");
  };
  return (
    <div>
      <NotesPage />
      <button onClick={handleClick}>Popup</button>
      <LoginPopUp />
    </div>
  );
}
