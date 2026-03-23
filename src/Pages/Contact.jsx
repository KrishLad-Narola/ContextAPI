import { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { z } from "zod";
import { Link } from "react-router-dom";



const loginValidation = z.object({
  firstName: z.string().min(3, "Username must be at least 3 characters"),
  lastName: z.string().min(6, "Password must be at least 6 characters"),
  mobileNumber: z.string().min(10, "MobileNumber must be an 10 digits"),
});

export const Contact = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobileNumber, setMobileNumber] = useState();


  const handleContactSubmit = (e) => {
    e.preventDefault();

    const result = loginValidation.safeParse({
      firstName,
      lastName,
      mobileNumber,
    });

    if (!result.success) {
      const errObj = {};
      result.error.issues.forEach((err) => {
        errObj[err.path[0]] = err.message;
      });
      setErrors(errObj);
      return;
    }

    setUser({ firstName, lastName, mobileNumber });
    console.log("LogIn Successfully", result.data)

  };

  return (
     <div
      className="min-h-[90VH] w-full flex gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop')",
      // }} >
      >
            <div className="">
      <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?semt=ais_hybrid&w=740&q=80" />

    </div>
    <form onSubmit={handleContactSubmit}
      className="w-full max-w-sm p-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl mb-10 ">

      <div className="flex flex-col items-center mb-6">
        <div className="bg-orange-500 p-3 rounded-full mb-2 shadow-lg text-white">
          <MdContactMail size={30} />
        </div>

        <h2 className="content-title">Contact Us.</h2>


        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            FirstName
          </label>
          <input
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}

          />
          {/* {errors.firstName && <p className="text-red-500">{errors.firstName}</p>} */}

        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            lastName
          </label>
          <input
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}

          />
          {/* {errors.lastName && <p className="text-red-500">{errors.lastName}</p>} */}

        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            MobileNumber
          </label>
          <input
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="MobileNumber"
            onChange={(e) => setMobileNumber(e.target.value)}
            
            />
          {/* {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber}</p>} */}
        <button
          className=" bg-orange-500 text-white w-full p-2 rounded-lg mt-2 "
          type="submit">Submit
        </button>

        <p className="text-sm text-center mt-4">
          <Link to="/Home" className="text-orange-500 font-bold">
            Goto Home
          </Link>
        </p>
          </div>

        </div>
      </div>

            </div>
    </form>

    </div>
  );
};

export default Contact;