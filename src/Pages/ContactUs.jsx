import React from "react";

const ContactUs = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Contact with us
          </h2>
        </div>
        <img
          src="https://images.theconversation.com/files/415311/original/file-20210809-25-149neyb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
          alt=""
          className="p-2 mt-10 h-full md:h-full"
        />
      </div>
      <form
        noValidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded border"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded border"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded border"
            spellCheck="false"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
