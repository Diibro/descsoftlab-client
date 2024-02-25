import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="page">
        <div className="hello-section">
          <div className="back-image"></div>
          <div className="hello-content">
            <h1>Welcome to Desc Softlab</h1>
          </div>
        </div>
    </main>
  );
}
