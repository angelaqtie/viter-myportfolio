import { Globe } from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <section className="py-10 relative ">
      <div className="container">
        <div className="pb-16">
          <h2>SKILLS</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {Array.from(Array(4).keys()).map((i) => (
            <div className="card center-all flex-col text-center gap-6">
              <div className=" rounded-full p-5 absolute top-[5rem] bg-light shadow-[0_35px_60px_5px_rgba(7,7,7,0.3)]">
                <Globe size={50} color="#233b23" />
              </div>
              <div className="bg-light p-10 rounded-2xl shadow-[0_35px_60px_15px_rgba(7,7,7,0.3)]">
                <h3>Lorem, ipsum.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate harum, voluptatem molestias delectus nisi provident
                  iure esse blanditiis rem. Vero odit officiis, excepturi error
                  velit nihil ex corrupti autem magni.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
