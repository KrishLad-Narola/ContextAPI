import { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { z } from "zod";
import { Link } from "react-router-dom";

const loginValidation = z.object({
  firstName: z.string().min(3, "Username must be at least 3 characters"),
  lastName: z.string().min(6, "Password must be at least 6 characters"),
  mobileNumber: z.string().length(10, "Mobile number must be exactly 10 digits"),
});

export const Contact = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  
  // State for errors and user data
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on new attempt

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

    setUser(result.data);
    console.log("Form Submitted Successfully", result.data);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 bg-gray-50 p-6">
      
      <div className="w-full max-w-md">
        <img 
          src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Contact Us"
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

       <form 
        onSubmit={handleContactSubmit}
        className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-500 p-3 rounded-full mb-2 shadow-lg text-white">
            <MdContactMail size={30} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">First Name</label>
          <input
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Last Name</label>
          <input
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Mobile Number</label>
          <input
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="1234567890"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-600 transition-colors text-white w-full py-2 rounded-lg font-bold shadow-md"
          type="submit"
        >
          Submit
        </button>

        <p className="text-sm text-center mt-4">
          <Link to="/" className="text-orange-500 font-bold hover:underline">
            Go to Home
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Contact;