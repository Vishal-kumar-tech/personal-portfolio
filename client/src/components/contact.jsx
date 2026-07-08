import '../styles/contact.css';

function Contact(){
    return(

  <section  className='contact' id='contact' data-aos="fade-left">

    <h2>Contact Me</h2>

    <form>

        <input type="text"
        placeholder="Enter Your Name" 
        />

        <input type="email"
        placeholder="Enter Your Email"
        />

        <textarea 
        placeholder='Write your message'>
        </textarea>

        <button type="submit">
            Send Message
        </button>

    </form>

  </section>
    )
}

export default Contact