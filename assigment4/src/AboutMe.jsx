function AboutMe() {
    return (
      <section id="about" className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <img src="https://i.pinimg.com/736x/46/91/70/469170f9679309238b7270d02bd03825.jpg" alt="About Me" className="md:w-1/3 rounded-3xl" />
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-600">Politicians & Presidents</p>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore dolore sit, esse nam consequuntur aliquam accusantium voluptates perspiciatis cum blanditiis sint expedita inventore porro quam eum laborum, consectetur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam a perspiciatis sequi nesciunt saepe quis odio maiores excepturi dolorem aperiam explicabo, facere nobis quidem. Quis beatae quae deserunt a!</p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-4xl">Read More</button>
        </div>
      </section>
    );
  }
  
  export default AboutMe;