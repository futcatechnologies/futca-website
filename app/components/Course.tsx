import React, { useState } from "react";

interface CourseProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const CourseComponent: React.FC<CourseProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = description.substring(0, 20);
  const remainingDescription = description.substring(20);

  return (
    <div className="flex flex-col h-full rounded-lg shadow-md border border-gray-200">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover md:w-full h-48 md:h-auto rounded-t-lg"
      />
      <div className="flex-grow flex flex-col justify-between">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">
            {showFullDescription ? description : truncatedDescription}
            {!showFullDescription && remainingDescription && (
              <span>
                ...{" "}
                {/* <button
                  className="text-blue-500"
                  onClick={() => setShowFullDescription(true)}
                >
                  Read More
                </button> */}
              </span>
            )}
          </p>
          <p className="text-gray-700 mt-2">Price: &#8358;{price}</p>
        </div>
        {/* Hide button if the description is already fully shown */}
        {!showFullDescription && (
          <button
            onClick={() => setShowFullDescription(true)}
            className="text-gray-600 bg-gray-200 text-center py-2 rounded-b-lg"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseComponent;
