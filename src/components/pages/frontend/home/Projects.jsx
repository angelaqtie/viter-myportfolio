import { imgPath } from "@/components/helpers/functions-general";
import { FilmIcon, Globe } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Projects = () => {
  return (
    <>
      <section className="py-10 bg-accent relative">
        <div className="container border-t-4 border-primary">
          <h2 className="pt-6">PROJECTS</h2>

          <div className="grid grid-cols-3 gap-6">
            {Array.from(Array(6).keys()).map((i) => (
              <div className="py-5  translate-y-5 group">
                <div className="center-all">
                  <img
                    src={`${imgPath}/dev.webp`}
                    alt=""
                    className="max-w-[26rem] h-[18.5rem] object-cover"
                  />
                </div>
                <div
                  className="card-1 absolute top-[1rem] max-h-[19rem] text-center center-all flex-col gap-5 p-10 visible
                transition-all ease-in-out duration-200 group-hover:scale-[1.2] group-hover:invisible"
                >
                  <div className=" center-all flex-col gap-5 p-10 bg-primary bg-opacity-45">
                    <FilmIcon size={50} />
                    <h4>Web Development</h4>
                    <p className="invisible">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias ipsa earum nesciunt! Accusamus dolore dicta
                      omnis suscipit saepe nam non.
                    </p>
                  </div>
                </div>
                <div
                  className="card-1 absolute top-[1rem] max-h-[19rem] text-center center-all flex-col gap-5 p-10 invisible 
                transition-all ease-in-out duration-200 group-hover:scale-[1.2] group-hover:visible "
                >
                  <div className=" center-all flex-col gap-5 p-10 bg-primary bg-opacity-45 ">
                    <FilmIcon size={50} />
                    <h4>Web Development</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias ipsa earum nesciunt! Accusamus dolore dicta
                      omnis suscipit saepe nam non.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="card-2 border border-line border-primary text-center center-all flex-col gap-5">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
