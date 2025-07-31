import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Glasswake</a>
        </div>
        <div className="nav-links">
          <a href="#">Contact</a>
        </div>
      </nav>
      <Slider />
      <footer>
        <p>Built by Ratan</p>
      </footer>
    </>
  );
}
