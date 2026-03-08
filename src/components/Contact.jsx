import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-12 text-base md:text-lg">
          Want to work together? Fill out the form.
        </p>

        <div className="grid grid-cols-1 gap-10">

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/itrevathik2012@gmail.com"
            method="POST"
            className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;