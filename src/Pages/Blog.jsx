import React from "react";

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-3 my-5">
      <div className="shadow-lg p-4 border rounded-md">
        <h2 className="text-center text-2xl font-sans font-bold my-5">
          What is CORS?
        </h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-based security
          mechanism controlled and enforced by the client (web browser). It
          allows a service (API) to indicate any origin other than its own from
          which the client can request resources. It has been designed in
          response to the same-origin policy (SOP) that restricts how a website
          (HTML document or JS script) loaded by one origin can interact with a
          resource from another origin. <br /> CORS is used to explicitly allow
          some cross-origin requests while rejecting others. CORS is implemented
          primarily in web browsers, but it can also be used in API clients as
          an option. It's present in all popular web browsers like Google
          Chrome, Firefox, Opera, and Safari. The standard has been accepted as
          a W3C Recommendation in January 2014. Based on that, we can assume
          that it is implemented in all currently available and other than
          listed web browsers.
        </p>
      </div>

      <div className="shadow-lg p-4 border rounded-md">
        <h2 className="text-center text-2xl font-sans font-bold my-5">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. <br /> We use firebase for some benefits. For examples-
          1.Reliable & Extensive Databases 2.Fast & Safe Hosting 3.Provides A
          Free Start to Newbies 4.Google Analytics 5.Firebase Cloud Messaging
          for Cross-Platform 6.Free Multi-Platform Firebase Authentication etc.
          Auth0, MongoDB, Passport, Okta etc are the most other popular
          alternatives and competitors to Firebase Authentication.
        </p>
      </div>

      <div className="shadow-lg p-4 border rounded-md">
        <h2 className="text-center text-2xl font-sans font-bold my-5">
          How does the private route work?
        </h2>
        <h4>
          PrivateRoute component is the blueprint for all private routes in the
          application. If the user is logged in, go on and display the component
          in question; otherwise, redirect the user to sign-in page.
          Additionally, we can define the logic of isLogin utility function
          separately in utils folder. <br />
          <p>1. Home: A public route that everyone can access to.</p>
          <p>
            2. Dashboard: A private route that only authenticated user can
            access to.
          </p>
          <p>
            3. Sign-in: A restricted route that unauthenticated user can see. To
            explain more, we don’t want to show the sign-in page after logged in
            to the site. If the authorised user goes to the sign-in page, we
            will redirect to dashboard page.
          </p>
        </h4>
      </div>
      <div className="shadow-lg p-4 border rounded-md">
        <h2 className="text-center text-2xl font-sans font-bold my-5">
          What is Node? How does Node work?
        </h2>
        <p>
          {" "}
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. <br />
          <strong>Working of Node.js:</strong> Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.{" "}
          <br /> <br />
          Node.js basically works on two concept <br /> <br />
          <strong>Asynchronous </strong> <br />
          <strong>Non-blocking I/O</strong> <br /> <br />
          <strong>Non-blocking I/o:</strong> Non-blocking i/o means working with
          multiple requests without blocking the thread for a single request.
          I/O basically interacts with external systems such as files,
          databases. Node.js is not used for CPU-intensive work means for
          calculations, video processing because a single thread cannot handle
          the CPU works. <br /> <br />
          <strong>Asynchronous:</strong>
          Asynchronous is executing a callback function. The moment we get the
          response from the other server or database it will execute a callback
          function. Callback functions are called as soon as some work is
          finished and this is because the node.js uses an event-driven
          architecture. The single thread doesn’t work with the request instead
          it sends the request to another system which resolves the request and
          it is accessible for another request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
