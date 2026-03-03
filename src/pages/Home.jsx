import React from 'react'
import CardItem from '../components/cards/CardItem'
import img1 from '../assets/image_1.png'
import img2 from '../assets/image_2.png'
import img3 from '../assets/image_3.png'
import Footer from '../components/common/Footer'

const Home = () => {
  // Cards ka data array
  const cardsData = [
    {
      id: 1,
      icon: img1,
      title: "Get Inspired & Help",
      description: "Discover stories of hope and find ways to make a real difference in people's lives.",
      buttonText: "Donate Now",
      bgColor: "#FC791A"  // Orange
    },
    {
      id: 2,
      icon: img2,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and help us create positive change in the community.",
      buttonText: "Join Us",
      bgColor: "#2E7D32"  // Green
    },
    {
      id: 3,
      icon: img3,
      title: "Spread the Word",
      description: "Share our mission with friends and family to help us reach more people in need.",
      buttonText: "Share Now",
      bgColor: "#1976D2"  // Blue
    }
  ]

  return (
    <div>
      {/* Hero Section - Same as before */}
      <div className="pt-20 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Donate.png')" }}>
        <div className="min-h-screen bg-opacity-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-6">
              Give A Helping Hand, For Needy People
            </h1>
            <p className="text-lg sm:text-xl md:text-xl mb-8 leading-relaxed">
              Your generous donation supports our mission to bring positive change to the community. Every contribution, no matter how small, makes a meaningful impact in peoples' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded transition-colors duration-200 text-lg">
                Donate Now
              </button>
              <button className="bg-white hover:bg-gray-200 text-red-900 font-bold px-8 py-3 rounded transition-colors duration-200 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section - With Props */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          How You Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Mapping through cards data and passing props */}
          {cardsData.map((card) => (
            <CardItem 
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home