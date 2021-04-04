import React from 'react';
import emailjs from 'emailjs-com';


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
      <div className="contact">
    <form  onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" required />
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Message</label>
      <textarea name="message"  required/>
      <input className="button" type="submit" value="Send" />
    </form>
    </div>
  );
}

