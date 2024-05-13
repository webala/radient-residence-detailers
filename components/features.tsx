import { FaHouseChimney } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { GiRedCarpet } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { LuConstruction, LuPartyPopper } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
export default function Features() {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Professional cleaning services</h2>
            <p className="text-xl text-gray-400">
              We provide cleaning services for residential households and
              enterprise buildings
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <FaHouseChimney size={21} />
              </div>

              <h4 className="h4 my-2 md:my-5 text-center">House Cleaning</h4>
              <p className="text-lg text-gray-400 text-center">
                Comprehensive service ensuring every corner is spotless,
                creating a fresh and inviting atmosphere for you and your
                family.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <RiSofaLine size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">
                Upholstery Cleaning
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Revitalize furniture, removing stains and odors, extending its
                life while restoring comfort and beauty.
              </p>
            </div>
            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <GiRedCarpet size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">Carpet Cleaning</h4>
              <p className="text-lg text-gray-400 text-center">
                Thoroughly sanitize hard-to-reach areas, eliminating grime for
                an immaculately clean and hygienic space.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <MdCleaningServices size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">Deep Cleaning</h4>
              <p className="text-lg text-gray-400 text-center">
                Renew carpets, lifting dirt and allergens, restoring freshness
                and softness to your floors.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <LuConstruction size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">
                Post Construction Cleaning
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Remove debris and dust, leaving your newly renovated space
                spotless and ready for occupancy.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <LuPartyPopper size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">
                Before & After Party Setting and Cleaning
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Assist with setup and handle cleanup, ensuring your space
                remains pristine before and after your event.
              </p>
            </div>

            {/* 7th item */}
            <div
              className="relative flex flex-col items-center md:col-span-2 lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600 flex items-center justify-center w-16 h-16 rounded-full">
                <FaRegBuilding size={21} />
              </div>
              <h4 className="h4 my-2 md:my-5 text-center">
                End of Tenancy Cleaning
              </h4>
              <p className="text-lg text-gray-400 text-center">
                Detailed clean to secure your deposit back, leaving the property
                in pristine condition for the next occupants.
              </p>
            </div>
            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div> */}

            {/* 6th item */}
            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
