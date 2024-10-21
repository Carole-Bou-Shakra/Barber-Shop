// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ReservePage = () => {
  // State for managing image indices, prices, reservation details, and modal visibility
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [currentHaircutIndex, setCurrentHaircutIndex] = useState(0);
  const [currentHairDesignIndex, setCurrentHairDesignIndex] = useState(0);
  const [currentMakeupIndex, setCurrentMakeupIndex] = useState(0);
  const [currentSpaIndex, setCurrentSpaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({ name: '', phone: '', time: '', service: '' });
  const [showInfo, setShowInfo] = useState(false);

  // Image and price data
  const highlightImages = ['highlight1.jpg', 'highlight2.jpg', 'lowlight1.jpg'];
  const haircutImages = ['haircut1.jpg', 'haircut2.jpg', 'haircutstar.jpg'];
  const hairDesignImages = ['design1.jpg', 'design2.jpg', 'design3.jpg'];
  const makeupImages = ['makeup1.jpeg', 'makeup2.jpg', 'makeup3.jpg'];
  const spaImages = ['spaimage.jpg', 'spaimage2.jpg', 'spa.jpg'];

  const highlightPrice = 80;
  const haircutPrice = 35;
  const hairDesignPrice = 60;
  const makeupPrice = 100;
  const spaPrice = 150;

  // Modal Handlers
  const handleOpenModal = (service) => {
    setReservationDetails({ name: '', phone: '', time: '', service });
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowInfo(false); // Reset info visibility
  };

  const handleReserve = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', reservationDetails); // Log reservation details
    handleCloseModal(); // Close modal after reservation
  };

  // Image carousel handlers
  const handlePreviousHighlightImage = () =>
    setCurrentHighlightIndex((prevIndex) => (prevIndex - 1 + highlightImages.length) % highlightImages.length);
  const handleNextHighlightImage = () =>
    setCurrentHighlightIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);

  const handlePreviousHaircutImage = () =>
    setCurrentHaircutIndex((prevIndex) => (prevIndex - 1 + haircutImages.length) % haircutImages.length);
  const handleNextHaircutImage = () =>
    setCurrentHaircutIndex((prevIndex) => (prevIndex + 1) % haircutImages.length);

  const handlePreviousHairDesignImage = () =>
    setCurrentHairDesignIndex((prevIndex) => (prevIndex - 1 + hairDesignImages.length) % hairDesignImages.length);
  const handleNextHairDesignImage = () =>
    setCurrentHairDesignIndex((prevIndex) => (prevIndex + 1) % hairDesignImages.length);

  const handlePreviousMakeupImage = () =>
    setCurrentMakeupIndex((prevIndex) => (prevIndex - 1 + makeupImages.length) % makeupImages.length);
  const handleNextMakeupImage = () =>
    setCurrentMakeupIndex((prevIndex) => (prevIndex + 1) % makeupImages.length);

  const handlePreviousSpaImage = () =>
    setCurrentSpaIndex((prevIndex) => (prevIndex - 1 + spaImages.length) % spaImages.length);
  const handleNextSpaImage = () =>
    setCurrentSpaIndex((prevIndex) => (prevIndex + 1) % spaImages.length);

  // Updated function to handle the button click to show info
  const handleInfoButtonClick = () => {
    // Check if there are reservation details
    if (reservationDetails.name && reservationDetails.phone && reservationDetails.time) {
      setShowInfo(true); // Set info visibility to true
    } else {
      alert('Please make a reservation first!'); // Alert if no reservation is made
    }
  };

  return (
    <div className="flex flex-col items-center container py-14">
      <h1 className="text-4xl font-semibold mt-5 flex items-center">
        Reservation
        {/* Conditionally render the Info button */}
        {reservationDetails.name && reservationDetails.phone && reservationDetails.time && (
          <button
            onClick={handleInfoButtonClick}
            className="ml-4 p-2 bg-orange-500 text-white rounded-[20px] hover:bg-red-600 transition duration-300"
          >
            Info
          </button>
        )}
      </h1>

      {/* Combined container for all sections */}
      <div className="mt-6 flex flex-row gap-4 w-full max-w-7xl overflow-x-auto">
        {/* Container for highlight images */}
        <div className="p-4 bg-white rounded-[20px] shadow-lg w-full max-w-[250px] ">
          <h1 className="text-2xl font-semibold text-center">Highlights</h1>
          <img
            src={highlightImages[currentHighlightIndex]}
            alt={`Highlight ${currentHighlightIndex + 1}`}
            className="object-cover rounded-[20px] w-full h-[40vh]"
          />
          <div className="mt-4 flex justify-between w-full">
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handlePreviousHighlightImage}
            >
              &lt;
            </button>
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handleNextHighlightImage}
            >
              &gt;
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">Price: ${highlightPrice}</p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="p-2 bg-orange-500 text-black rounded-[20px] hover:bg-orange-600 transition duration-300"
                onClick={() => handleOpenModal('Highlights')}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Other sections (Haircut, Hair Design, Makeup, Spa) follow the same structure */}
        {/* Container for haircut images */}
        <div className="p-4 bg-white rounded-[20px] shadow-lg w-full max-w-[250px] ">
          <h1 className="text-2xl font-semibold text-center">Haircut Styles</h1>
          <img
            src={haircutImages[currentHaircutIndex]}
            alt={`Haircut ${currentHaircutIndex + 1}`}
            className="object-cover rounded-lg w-full h-[40vh]"
          />
          <div className="mt-4 flex justify-between w-full">
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handlePreviousHaircutImage}
            >
              &lt;
            </button>
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handleNextHaircutImage}
            >
              &gt;
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">Price: ${haircutPrice}</p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="p-2 bg-orange-500 text-black rounded-[20px] hover:bg-orange-600 transition duration-300"
                onClick={() => handleOpenModal('Haircut')}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Container for hair design images */}
        <div className="p-4 bg-white rounded-[20px] shadow-lg w-full max-w-[250px] ">
          <h1 className="text-2xl font-semibold text-center">Hair Design</h1>
          <img
            src={hairDesignImages[currentHairDesignIndex]}
            alt={`Hair Design ${currentHairDesignIndex + 1}`}
            className="object-cover rounded-lg w-full h-[40vh]"
          />
          <div className="mt-4 flex justify-between w-full">
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handlePreviousHairDesignImage}
            >
              &lt;
            </button>
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handleNextHairDesignImage}
            >
              &gt;
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">Price: ${hairDesignPrice}</p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="p-2 bg-orange-500 text-black rounded-[20px] hover:bg-orange-600 transition duration-300"
                onClick={() => handleOpenModal('Hair Design')}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Container for makeup images */}
        <div className="p-4 bg-white rounded-[20px] shadow-lg w-full max-w-[250px] ">
          <h1 className="text-2xl font-semibold text-center">Makeup</h1>
          <img
            src={makeupImages[currentMakeupIndex]}
            alt={`Makeup ${currentMakeupIndex + 1}`}
            className="object-cover rounded-lg w-full h-[40vh]"
          />
          <div className="mt-4 flex justify-between w-full">
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handlePreviousMakeupImage}
            >
              &lt;
            </button>
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handleNextMakeupImage}
            >
              &gt;
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">Price: ${makeupPrice}</p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="p-2 bg-orange-500 text-black rounded-[20px] hover:bg-orange-600 transition duration-300"
                onClick={() => handleOpenModal('Makeup')}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        {/* Container for spa images */}
        <div className="p-4 bg-white rounded-[20px] shadow-lg w-full max-w-[250px] ">
          <h1 className="text-2xl font-semibold text-center">Spa</h1>
          <img
            src={spaImages[currentSpaIndex]}
            alt={`Spa ${currentSpaIndex + 1}`}
            className="object-cover rounded-lg w-full h-[40vh]"
          />
          <div className="mt-4 flex justify-between w-full">
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handlePreviousSpaImage}
            >
              &lt;
            </button>
            <button
              className="p-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
              onClick={handleNextSpaImage}
            >
              &gt;
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">Price: ${spaPrice}</p>
            <div className="flex justify-center items-center mt-4">
              <button
                className="p-2 bg-orange-500 text-black rounded-[20px] hover:bg-orange-600 transition duration-300"
                onClick={() => handleOpenModal('Spa')}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for reservation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white/0 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Make a Reservation for {reservationDetails.service}</h2>
            <form onSubmit={handleReserve}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={reservationDetails.name}
                  onChange={(e) => setReservationDetails({ ...reservationDetails, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  value={reservationDetails.phone}
                  onChange={(e) => setReservationDetails({ ...reservationDetails, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="time">
                  Time:
                </label>
                <input
                  type="datetime-local"
                  id="time"
                  value={reservationDetails.time}
                  onChange={(e) => setReservationDetails({ ...reservationDetails, time: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-4 px-4 py-2 bg-gray-500 text-black rounded-[20px] hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-[20px] bg-orange-500 text-black hover:bg-orange-500 transition duration-300"
                >
                  Reserve
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Show reservation details after reservation is made */}
      {showInfo && (
        <div className=" fixed top-5 left-0 right-0 w-[25%] items-center justify-center mt-6 p-4 bg-green-100 rounded-lg max-w-md mx-auto overflow-visible z-50">
          <h2 className="text-xl font-semibold">Reservation Details</h2>
          <p><strong>Name:</strong> {reservationDetails.name}</p>
          <p><strong>Phone:</strong> {reservationDetails.phone}</p>
          <p><strong>Time:</strong> {reservationDetails.time}</p>
          <p><strong>Service:</strong> {reservationDetails.service}</p>
          <button className="mt-2  text-red-500 hover:underline" onClick={() => setShowInfo(false)}
            >
            Close
            </button>
        </div>
      )}
    </div>
  );
};

export default ReservePage;
