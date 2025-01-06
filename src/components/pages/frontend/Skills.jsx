import { FilmIcon, Globe } from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="py-10 bg-accent">
        <div className="container border-t-4 border-primary">
          <h2 className="pt-6">SKILLS</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="card-1 border border-line border-primary text-center center-all flex-col gap-5 p-10">
              <FilmIcon size={50} />
              <h4>Video editing</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias ipsa earum nesciunt! Accusamus dolore dicta omnis
                suscipit saepe nam non.
              </p>
            </div>
            <div className="card-2 border border-line border-primary text-center center-all flex-col gap-5">
              <Globe size={50} />
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias ipsa earum nesciunt! Accusamus dolore dicta omnis
                suscipit saepe nam non.
              </p>
            </div>
            <div className="card-2 border border-line border-primary text-center center-all flex-col gap-5">
              <Globe size={50} />
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias ipsa earum nesciunt! Accusamus dolore dicta omnis
                suscipit saepe nam non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
