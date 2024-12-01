import React from "react"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Content Section */}
      <div className="w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We are a passionate team committed to driving change through
              innovation and collaboration. Our platform is designed to empower
              individuals and organizations to unlock their true potential.
            </p>
          </div>

          {/* Right (image) */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Jaime Lannister
            </h3>

            <p className="text-gray-500">CEO</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Cersei Lannister
            </h3>

            <p className="text-gray-500">CTO</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Daenerys Targaryen
            </h3>

            <p className="text-gray-500">Lead Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
