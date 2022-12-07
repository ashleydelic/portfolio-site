import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div>
        <div>
          <p>Let's connect! 🤝</p>
          <p>Submit form below to get in touch </p>
        </div>

        <div>
          <form action="">
            <input
              type=""
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type=""
              name="email"
              placeholder="Email"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
