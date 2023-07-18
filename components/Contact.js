
import React from "react";

// import ContactForm from "./ContactForm";
import EarthCanvas from "./EarthCanvas";

const Contact = () => {

    return (
        <div
            className="w-full max-w-[1280px] mx-auto pt-10"
            id="Contact">

            <div

            >

                {/* <ContactForm /> */}
                <div className="  bg-transparent bd bd">
                    <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
                        <div className="w-full xl:mr-12 lg:mr-6">


                            <EarthCanvas />

                        </div>
                        <div className="w-full  lg:pt-0 pt-4">
                            <h1 aria-label="Get in touch" role="paragraph" className="subparagraph">
                                Get in touch
                            </h1>
                            <p role="contentinfo" className="mt-4 paragraph lg:block hidden">
                                It is a long established fact that a reader <br /> will be distracted by the readable{" "}
                            </p>
                            <p role="contentinfo" className="mt-4 paragraph lg:hidden">
                                It is a long established fact that a reader will be distracted by the readable{" "}
                            </p>
                            <div className="xl:flex items-center justify-between mt-10">
                                <div>
                                    <p className="paragraph">First Name</p>
                                    <input type="name" aria-label="Please input first name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500     bg-transparent bd rounded placeholder-gray-500" placeholder="eg. William" />
                                </div>
                                <div className="xl:ml-6 xl:mt-0 mt-4">
                                    <p className="paragraph">Last Name</p>
                                    <input type="name" aria-label="Please input Last name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500     bg-transparent bd rounded placeholder-gray-500" placeholder="eg. Smith" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="paragraph">Email Address</p>
                                <input type="email" aria-label="Please enter email" className="w-full p-3 text-base leading-none text-gray-500     bg-transparent bd rounded placeholder-gray-500" placeholder="eg. william.smith@doeco.com" />
                            </div>
                            <div className="mt-6">
                                <p className="paragraph">Message </p>
                                <textarea aria-label="Please leave comments" className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500     bg-transparent bd rounded placeholder-gray-500" defaultValue={""} />
                            </div>
                            <button role="button" arial-label="send message " className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 text-base font-semibold leading-4 py-6 px-8 text-white bg-indigo-700 rounded mt-12">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Contact;
