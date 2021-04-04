import React from 'react';
import emailjs from 'emailjs-com';
import linkedinlogo from './img/iconmonstrlinkedin3.svg'
import facebooklogo from './img/facebook.svg'
import githublogo from './img/github3.svg'



export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_site', e.target, 'user_DrjpxicvlC8JOMfE9Yc1T')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
       <>
    <div  className="contact">
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"  />
        <input type="text" name="name" required placeholder="Name..." />
        <input type="email" name="email" required placeholder="E-mail..." />
        <textarea name="message" required placeholder="Your message..." />
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
    <div id="logos">
     <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/milos-kozic-09aa1a1b1/"><img src={linkedinlogo} alt="linkedinloogo"/></a>
     <a target="_blank" rel="noreferrer" href="https://www.facebook.com/milos.kozic.1/"><img src={facebooklogo} alt="facebookloogo"/></a>
     <a target="_blank" rel="noreferrer" href="https://github.com/MilosKozic"><img src={githublogo} alt="githubloogo"/></a>

    </div>
        </>
  );
}

