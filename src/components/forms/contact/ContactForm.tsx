const ContactForm = () => {
  return (
    <article>
      <div className="py-8 lg:px-24 mx-auto max-w-screen-sm ">
        <form action="#" className="space-y-4">
          <input
            type="text"
            id="name"
            className="bg-black text-white placeholder-gray-300 text-sm rounded-lg block w-full p-4 shadow-lg"
            placeholder="För- och efternamn *"
            required
          />
          <div className="flex gap-4">
            <input
              type="email"
              id="email"
              className="bg-black text-white placeholder-gray-300 text-sm rounded-lg block w-full p-4 outline-2 outline focus:outline-fuchsia-600"
              placeholder="Email *"
              required
            />
            <input
              type="tel"
              id="tel"
              className="bg-black text-white placeholder-gray-300 text-sm rounded-lg block w-full p-4 shadow-lg"
              placeholder="Telefonnummer"
            />
          </div>
          <textarea
            id="message"
            className="bg-black text-white placeholder-gray-300 text-sm rounded-lg block w-full p-4 shadow-lg min-h-[150px] resize-none"
            placeholder="Meddelande *"
          />
          <button
            type="submit"
            className="bg-transparent w-full relative inline-flex items-center justify-center
            overflow-hidden text-sm text-white rounded-lg group bg-gradient-to-br
            from-purple-400 to-fuchsia-800 outline-0 shadow-lg"
          >
            <span className="w-full relative p-4 transition-all ease-in duration-200 bg-black rounded-md group-hover:bg-opacity-0">
              Skicka
            </span>
          </button>
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
