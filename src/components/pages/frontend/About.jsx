import { imgPath } from "@/components/helpers/functions-general";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="">
        <Header />
        <div>
          <div className="container">
            <div className="grid grid-cols-2 items-center mb-[7.8rem]">
              <div className="mr-[15rem]">
                <div className="center-all">
                  <img
                    src={`${imgPath}/Profile.png`}
                    alt=""
                    className="max-w-[500px] relative"
                  />
                </div>

                <div className="font-bold">
                  <div className="text-[4rem] text-dark bottom-[15rem] left-[30rem] mt-3 absolute bg-light rounded-full px-6 py-4">
                    <h2 className="text-primary">MY NAME IS</h2>
                    <h1>KIANA ANGELA</h1>
                  </div>

                  <h1></h1>
                </div>
              </div>

              <div className=" border-2 border-line p-4 border-primary relative mt-16">
                <div>
                  <h2 className="absolute font-bold pt-4 bottom-[18.5rem] bg-light">
                    Who Am I
                  </h2>
                </div>
                <div className="  p-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi necessitatibus autem molestias dolores repellat modi
                    asperiores dignissimos incidunt voluptate repudiandae! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                    numquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam corrupti dolorum itaque accusantium totam ad eveniet
                    nesciunt dolorem? Est laudantium, libero quos ut reiciendis
                    quasi hic nisi deserunt temporibus dolorl Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Illo quam voluptatem
                    tempora?
                  </p>
                  <div className="flex items-center justify-center mt-8">
                    <ul className="flex gap-10 item-center">
                      <li>
                        <FaFacebook size={20} />
                      </li>
                      <li>
                        <FaTwitter size={20} />
                      </li>
                      <li>
                        <FaInstagram size={20} />
                      </li>

                      <li>
                        <FaEnvelope size={20} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
