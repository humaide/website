import { useState } from "react";
function ContactForm() {
    const [emailBody, setEmailBody] = useState('');
    const createMailtoLink = () => {
        const encodedBody = encodeURIComponent(emailBody); // Text im Body codieren
        return `mailto:hello@humaide.com?subject=Kontaktanfrage&body=${encodedBody}`;
      };
    
      const handleSendEmail = () => {
        const mailtoLink = createMailtoLink();
        window.location.href = mailtoLink; // Öffnet den Mail-Client mit dem Text als Body
      };
    return (
        <>
            <form className="h-full flex flex-col text-midnight-blue px-12 items-center justify-center">
                <h2 className="text-xl uppercase py-4 font-semibold">Contact Form</h2>
                <div className="w-full pb-4">
                    <label className="self-start text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your full name" className="border-2 border-gray-300 px-4 py-2 w-full rounded-sm"/>
                </div>
                <div className="w-full pb-4">
                    <label className="self-start text-sm">E-Mail</label>
                    <input type="text" name="mail" id="mail" placeholder="example@example.com" className="border-2 border-gray-300 px-4 py-2 w-full rounded-sm"/>
                </div>
                <div className="w-full pb-4">
                    <label className="self-start text-sm">Message</label>
                    <textarea name="message" rows="10" placeholder="Your message" className="border-2 border-gray-300 px-4 py-2 w-full rounded-sm text-wrap h-40"/>
                </div>
                <a href="mailto:hello@humaide.com?subject=Kontaktanfrage&body=Hallo%20liebes%20HUMAIDE%20Team,%0D%0A%0D%0Aich%20bin%20auf%20eure%20Website%20gestoßen%20und%20würde%20mich%20sehr%20über%20eine%20Nachricht%20von%20euch%20freuen!%20">
                  <button className="my-4 px-4 py-2 rounded-md border-2 bg-yellow border-yellow hover:bg-midnight-blue hover:text-robin-blue hover:border-robin-blue duration-300 shadow-md font-semibold xl:text-lg 2xl:text-4xl xl:px-8 xl:py-4">Send a message!</button>   
                </a>
            </form>
        </>
    );
  };
  
  export default ContactForm;