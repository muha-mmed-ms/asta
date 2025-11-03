import { useState } from 'react';

export default function RoomGallery() {
  const rooms = [
    { 
      id: 'bedroom', 
      name: 'BEDROOM', 
      images: [
        '/images/bedroom-1.jpg',
        '/images/bedroom-2.jpg'
      ]
    },
    { 
      id: 'kitchen', 
      name: 'KITCHEN', 
      images: [
        '/images/kitchen-1.jpg',
        '/images/kitchen-2.jpg'
      ]
    },
    { 
      id: 'living-room', 
      name: 'LIVING ROOM', 
      images: [
        '/images/living-room-1.jpg',
        '/images/living-room-2.jpg'
      ]
    },
    { 
      id: 'balcony', 
      name: 'BALCONY', 
      images: [
        '/images/balcony-1.jpg',
        '/images/balcony-2.png'
      ]
    },
    { 
      id: 'bathroom', 
      name: 'BATHROOM', 
      images: [
        '/images/bathroom-1.jpg',
        '/images/bathroom-2.jpg'
      ]
    },
    { 
      id: 'dressing', 
      name: 'DRESSING', 
      images: ['/images/dressing.jpg'] 
    },
    { 
      id: 'amenities', 
      name: 'AMENITIES', 
      images: [
        '/images/amenities-1.jpg',
        '/images/amenities-2.jpg',
        '/images/amenities-3.jpg',
        '/images/amenities-4.jpg',
        '/images/amenities-5.jpg',
        '/images/amenities-6.jpg',
        '/images/amenities-7.jpg',
        '/images/amenities-8.jpg',
        '/images/amenities-9.jpg'
      ]
    }
  ];

  const [activeRoom, setActiveRoom] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentRoom = rooms[activeRoom];
  const currentImages = currentRoom.images;

  // Change room (also resets image index)
  const handleRoomChange = (index) => {
    setActiveRoom(index);
    setActiveImageIndex(0);
  };

  // Navigate through all images sequentially
  const handlePrevious = () => {
    if (activeImageIndex > 0) {
      // Go to previous image in current room
      setActiveImageIndex(activeImageIndex - 1);
    } else {
      // Go to previous room and its last image
      const newRoom = activeRoom === 0 ? rooms.length - 1 : activeRoom - 1;
      setActiveRoom(newRoom);
      setActiveImageIndex(rooms[newRoom].images.length - 1);
    }
  };

  const handleNext = () => {
    if (activeImageIndex < currentImages.length - 1) {
      // Go to next image in current room
      setActiveImageIndex(activeImageIndex + 1);
    } else {
      // Go to next room and its first image
      const newRoom = activeRoom === rooms.length - 1 ? 0 : activeRoom + 1;
      setActiveRoom(newRoom);
      setActiveImageIndex(0);
    }
  };

  return (
    <section className="bg-[#1a2947] py-12 lg:py-16 w-full">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-8 lg:mb-12 overflow-x-auto">
          <div className="flex justify-center items-center gap-0 min-w-max mx-auto">
            {rooms.map((room, index) => (
              <div key={room.id} className="flex items-center">
                <button
                  onClick={() => handleRoomChange(index)}
                  className={`px-4 sm:px-6 lg:px-8 py-3 text-xs sm:text-sm tracking-wider transition-colors whitespace-nowrap ${
                    activeRoom === index
                      ? 'text-white font-medium'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {room.name}
                </button>
                {index < rooms.length - 1 && (
                  <div className="h-6 w-px bg-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery with Navigation */}
        <div className="flex items-center gap-2 sm:gap-6 lg:gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div className="flex-1 relative min-h-[400px] sm:min-h-[450px] aspect-[3/4] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
            <img
              src={currentImages[activeImageIndex]}
              alt={`${currentRoom.name} - Image ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {/* Show image dots if room has multiple images, otherwise show room navigation dots on mobile */}
          {currentImages.length > 1 ? (
            // Image navigation dots
            currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeImageIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))
          ) : (
            // Room navigation dots (only on mobile when room has single image)
            <div className="flex gap-2 lg:hidden">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleRoomChange(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeRoom === index
                      ? 'bg-[#7ba5d6] w-4'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to ${rooms[index].name}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

