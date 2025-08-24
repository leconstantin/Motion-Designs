import { ArmchairIcon } from "lucide-react";
import Image from "next/image";
import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import styles from "./style.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <nav className="nav">
        <div className="menu-bar">
          <div className="menu-logo">
            <ArmchairIcon />
          </div>
          <div className="menu-toggle-btn">
            <div className="menu-toggle-label">
              <p>Menu</p>
            </div>
            <div className="menu-hamburger-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-content">
            <div className="menu-media-wrapper">
              <Image
                src={img1}
                alt="image"
                // className="w-full h-full object-cover"
              />
            </div>
            <div className="menu-content-wrapper">
              <div className="menu-content-main">
                <div className="menu-col">
                  <div className="menu-link">
                    <a href="/">Index</a>
                  </div>
                  <div className="menu-link">
                    <a href="/">Portifolio</a>
                  </div>
                  <div className="menu-link">
                    <a href="/">Studio</a>
                  </div>
                  <div className="menu-link">
                    <a href="/">Journal</a>
                  </div>
                  <div className="menu-link">
                    <a href="/">Connect</a>
                  </div>
                </div>
                <div className="menu-col">
                  <div className="menu-tag">
                    <a href="/">Web Animations</a>
                  </div>
                  <div className="menu-tag">
                    <a href="/">Intercative Media</a>
                  </div>
                  <div className="menu-tag">
                    <a href="/">Motion Craft</a>
                  </div>
                </div>
              </div>
              <div className="menu-content-footer">
                <div className="menu-col">
                  <p>Kigali, Rwanda</p>
                </div>
                <div className="menu-col">
                  <p>+49 176 60 60 60 60</p>
                  <p>Made with love in Berlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <section className="hero">
          <h1>Modern Web Animations</h1>
        </section>
        <section className="banner">
          <Image
            src={img2}
            alt="image"
            // className="w-full h-full object-cover"
          />
        </section>
        <section className="outro">
          <h1>Let's build something big </h1>
        </section>
      </div>
    </div>
  );
}
