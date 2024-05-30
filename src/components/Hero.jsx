import Courses from "./Courses";
import Input from "./SearchInput";
import Header from "./Header";
export const Hero = () => {
  const bgColor = {
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,0.1292892156862745) 41%)",
  };
  return (
    <div>
      <Header />
      <div
        className="h-full lg:h-[500px] mt-0 border-0 border-red-500"
        style={bgColor}
      >
        <div className="relative h-full  lg:h-[500px] mt-0  flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 lg:mt-28 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            {/* <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block bg-cyan-100"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg> */}
            <div className="flex justify-center mt-10 h-[14rem] min-[500px]:h-[17rem] min-[1000px]:h-[23rem] border-0 border-red-500">
              <img
                style={{
                  clipPath: "polygon(0 0, 100% 0, 53% 100%, 0% 100%)",
                  objectCover: "cover",
                  width: "80%",
                  height: "36",
                  borderRadius: "8px",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                  height: "56",
                  mdHeight: "96",
                  lgHeight: "full",
                }}
                className="mr-0 border-0 border-red-500 "
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
          </div>
          <div className="border-0 border-red-500 relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className=" lg:my-40 lg:max-w-lg lg:pr-5">
              <h2 className="mb-5 font-sans  font-bold tracking-tight text-gray-900 text-xl md:text-[3rem] sm:leading-none">
                Take the{" "}
                <span className="font-bold text-blue-600">next step </span>
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <Input />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-blue-600 my-4 mx-8 lg:h-[440px] h-full rounded-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex justify-center items-center">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 lg:-mt-16">
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                Discover world of SAP expertise
              </h2>

              <p className="mt-4 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="/"
                className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-100 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <Courses />
    </div>
  );
};
