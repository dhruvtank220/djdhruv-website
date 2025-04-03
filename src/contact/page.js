export default function Contact() {
    return (
      <main className="p-8 bg-secondary text-white">
        <h1 className="text-4xl font-bold">Contact Me 📩</h1>
        <form name="contact" method="POST" data-netlify="true" className="mt-6 space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required className="p-3 w-full bg-gray-800 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="p-3 w-full bg-gray-800 rounded" />
          <textarea name="message" placeholder="Your Message" required className="p-3 w-full bg-gray-800 rounded"></textarea>
          <button type="submit" className="p-3 bg-primary text-white rounded">Send Message</button>
        </form>
      </main>
    );
  }
  