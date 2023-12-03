const ContactForm = () => {
  return (
    <article>
      <div className="py-8 px-24 mx-auto max-w-screen-sm ">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p> */}
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
              className="bg-black text-white placeholder-gray-300 text-sm rounded-lg block w-full p-4 shadow-lg"
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
            className="bg-black text-white hover:bg-fuchsia-800 font-medium rounded-lg text-xs md:text-sm p-4 w-full shadow-lg duration-200 transition-all"
          >
            Skicka
          </button>
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
