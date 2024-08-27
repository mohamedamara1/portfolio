export default function Contact() {
  return (
    <form className="flex flex-col gap-8 bg-gradient-to-b from-slate-700 to-gray-800  rounded-lg p-6 w-full max-w-md min-h-96 min-w-96">
      <div className="">
        <label
          className="block text-lg font-bold mb-2 text-teal-100"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
          id="name"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="">
        <label
          className="block  text-lg font-bold mb-2 text-teal-100"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
          id="email"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="">
        <label
          className="block  text-lg font-bold mb-2 text-teal-100"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
          id="message"
          placeholder="Your Message"
          rows={5}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-teal-800 hover:bg-teal-100 hover:text-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send
        </button>
      </div>
    </form>
  );
}
