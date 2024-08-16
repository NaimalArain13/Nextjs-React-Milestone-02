export default function Contact() {
  return (
    <section className="bg-bg py-12">
      <div>
        <h1 className="flex justify-center pt-8 pb-16 text-5xl font-bold tracking-widest bg-gradient-to-r from-black to-cyan-100 bg-clip-text text-transparent">
          Contact Me
        </h1>
      </div>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-lg mx-auto bg-text p-8 shadow-md rounded-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-text transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
