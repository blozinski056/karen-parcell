"use client";

import emailjs from "@emailjs/browser";

import Image from "next/image";
import fbBlack from "../../public/icons/facebook-black.png";
import fbBlue from "../../public/icons/facebook-blue.png";
import instaBlack from "../../public/icons/instagram-black.png";
import instaBlue from "../../public/icons/instagram-blue.png";
import linkedinBlack from "../../public/icons/linkedin-black.png";
import linkedinBlue from "../../public/icons/linkedin-blue.png";

export default function Contact() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37dw4bx",
        "template_8392x7f",
        e.currentTarget,
        "9h1SyXE2c6o9zblso"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();

    const overlay = document.querySelector(
      "#contact > div > div:nth-of-type(1) > div"
    );
    if (overlay) {
      overlay.classList.remove("hidden");
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 5000);
    }
  }

  return (
    <div id="contact">
      <h1>
        Get in <span>Contact</span>
        <br className="mobile-break" /> with Me!
      </h1>
      <div>
        <div>
          <form onSubmit={sendEmail} autoComplete="off">
            <div className="input name">
              <input type="text" required name="name" />
              <span>Name</span>
            </div>
            <div className="input email">
              <input type="text" required name="email" />
              <span>E-Mail</span>
            </div>
            <div className="input message">
              <textarea required name="message"></textarea>
              <span>Message</span>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="hidden">
            <p>
              Thank you for reaching out!
              <br />I will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div>
          <a href="//www.facebook.com/KarenParcellHomes/">
            <Image src={fbBlack} alt="" />
            <Image src={fbBlue} alt="" />
          </a>
          <a href="//www.instagram.com/karenparcell_homes">
            <Image src={instaBlack} alt="" />
            <Image src={instaBlue} alt="" />
          </a>
          <a href="//www.linkedin.com/in/karen-parcell-192128133/">
            <Image src={linkedinBlack} alt="" />
            <Image src={linkedinBlue} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
