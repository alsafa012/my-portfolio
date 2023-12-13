
const SendEmail = () => {
     return (
          <div className="">
               <form className="space-y-2 text-start border w-[40%] mx-auto p-2 shadow-xl rounded-xl">
                    <div className="text-center mx-auto md:w-[55%]">
                         <h1 className="text-2xl font-bold border-b-4 py-3">
                              Contact with via email
                         </h1>
                    </div>
                    <div>
                         <input
                              type="text"
                              placeholder="Enter Your name..."
                              className="input input-bordered w-full"
                         />
                    </div>
                    <div>
                         <input
                              type="email"
                              placeholder="Enter Your email..."
                              className="input input-bordered w-full"
                         />
                    </div>
                    {/* <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                    <div>
                         <textarea
                              className="w-full textarea textarea-bordered"
                              // cols="50"
                              rows="5"
                              placeholder="Enter Your Message..."
                         ></textarea>
                    </div>
                    <input className="btn" type="submit" value="Send Message" />
               </form>
          </div>
     );
};

export default SendEmail;
