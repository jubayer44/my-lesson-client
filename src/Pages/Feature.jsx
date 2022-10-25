import React from "react";

const Feature = () => {
  return (
    <section className="p-4 lg:p-8  bg-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">It's Not What You Sell That Matters as Much as How You Sell It!</h2>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=900&t=st=1666640973~exp=1666641573~hmac=da5df519a2df05051c648f2844184b28a2b3d438b762f0db1cb684775c5e34e9"
            alt=""
            className="h-80  aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            
            <h3 className="text-2xl font-bold text-gray-700">
            Digital Marketing Agency
            </h3>
            <p className="my-6 dark:text-gray-700">
            In our many years of work with internet-y things, we’ve seen the massive growth in digital marketing. 20 or so years ago, you’d be a fool for investing in digital marketing. But now, you’re a fool if you aren’t. More and more businesses are pouring their marketing budgets into digital. It’s considered cheaper in comparison to print marketing and advertising on TV and radio. Digital marketing campaigns are easier to set up, run, monitor and the results are trackable and measurable in a way that non-digital marketing and advertising can’t offer. Put simply, we are truly in the digital age.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?w=900&t=st=1666641028~exp=1666641628~hmac=a75c0b555e9c96bdc94575319da47a3176971f60cbff6ea54f04211b8a25ecd5"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 0">
            
            <h3 className="text-2xl font-bold text-gray-700">
            Old’ Marketing
            </h3>
            <p className="my-6 dark:text-gray-700">
            Whilst we specialise in digital marketing, and we’re a little biased, by no means should you invest all your money into a solely digital budget. Print marketing is still an effective way to generate some leads, but it’s diminished over the years. Digital marketing is taking over, but the ‘old’ ways of marketing have not been completely forgotten. However, be aware that print marketing is becoming less and less relevant, but not entirely obsolete. With everything moving towards becoming digital, you can see why. Magazines are read on tablet devices and adverts appear on our social feeds, so print is on the way out. It may be slowly disappearing, but it will completely happen eventually. So, when it comes to looking at your marketing budget, maybe consider devoting more money to digital as opposed to print.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
