import BgImage from "../../assets/common/Call-Center.jpg"

const Contacts = () => {
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh] ">
          <div className="images absolute top-16 left-0 w-full h-1/2 ">
            <img src={BgImage} alt="" className="w-full h-full object-cover " />
          </div>
          <div className="text absolute lg:top-48 left-[45%] ">
            <h1 className="lg:text-4xl text-2xl font-semibold">Contact Us</h1>
          </div>
        </div>
        <h1 className="text-center lg:text-3xl text-2xl font-bold mb-6">Let's Start a Conversation</h1>

        <div className="lg:flex gap-5 lg:mx-16 mx-4">
          <div className="lg:w-1/2 ">
            <h1 className="text-xl font-semibold">Ask how we can help you:</h1>

            <div className="my-4">
              <p className="font-medium">See our platform in action</p>
              <span className="text-sm ">Request a personalized demo of rootcart partner marketing platform.</span>
            </div>
            <div className="my-4">
              <p className="font-medium">Explore life at RootCart</p>
              <span className="text-sm ">Search open positions, read about company culture and values, <br /> and explore our charitable initiatives.</span>
            </div>

            <h1 className="mt-5 text-xl font-semibold">Points of Contact</h1>

            <div className="my-4">
              <p className="font-medium">Dhaka | Rootcart</p>
              <span className="text-sm ">105/3 north jatrabari, Dhaka-1280 , Dhaka, Bangladesh</span>
            </div>

            <div className="my-4">
              <p className="font-medium">Billing Inquiries</p>
              <span className="text-sm ">+8801798341509</span>
            </div>

            <div className="my-4">
              <p className="font-medium">Information and Sales </p>
              <span className="text-sm text-blue-700 font-medium">rootcart@example.com</span>
            </div>

            <div className="my-4">
              <p className="font-medium">Support </p>
              <span className="text-sm text-blue-700 font-medium ">abdullahalnoman1509@gmail.com</span>
            </div>

            <h1 className="mt-5 text-xl font-semibold"> Additional Office Locations</h1>

            <div className="my-4">
              <p className="font-medium">Motijheel, Dhaka </p>
              <span className="text-sm ">105/3 north Motijheel, Dhaka-1280 , Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form>
              <div>
                <div>
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First name..." required />
                </div>
                <div className="mt-3">
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last name</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last name..." required />
                </div>
                <div className="mt-3">
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Company</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Company..." required />
                </div>
                <div className="mt-3">
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email address</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email address..." required />
                </div>
                <div className="mt-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                  <textarea rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
               
                <button type="button" className="text-white w-full mt-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts