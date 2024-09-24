import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      At our core, we are a team of passionate developers dedicated to building efficient, scalable, and dynamic web applications using React. With a deep understanding of modern front-end architecture, we create intuitive user interfaces that enhance the overall user experience. Our expertise in React allows us to deliver high-performance applications that are not only responsive but also easy to maintain. We pride ourselves on crafting solutions that push the boundaries of innovation, ensuring your digital product stands out in today's fast-evolving web ecosystem.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Partner with us to transform your ideas into reality using advanced React development practices. Our commitment to innovation and technical excellence ensures that your web applications not only meet industry standards but exceed expectations.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}