import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and creative opportunities.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
          <form
            action="https://formsubmit.co/itrevathik2012@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

            <div className="space-y-6">
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-text-secondary text-sm font-medium mb-2 ml-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="flex-grow w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 transition-all placeholder:text-white/20 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent-primary/10 rounded-full blur-[120px]"></div>
    </section>
  );
}

export default Contact;