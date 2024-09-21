import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "7035318d-ed5b-41eb-be86-e643edbffbf1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setName(formData.get('name'));
      setPhone(formData.get('phone'));
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our contact information below.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@edusity.in</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
          <label> Phone Number</label>
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <label> Write your message here</label>
          <textarea name="message" rows="6" placeholder="Write your message here" required />
          <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        {result === "Form Submitted Successfully" && (
          <div>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact;
