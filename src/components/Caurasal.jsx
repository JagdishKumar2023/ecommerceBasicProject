import React from "react";
// import image1 from "../Assets/Image1.png";
// import image2 from "../Assets/Image2.jpeg";
// import image3 from "../Assets/Image3.png";
// import image4 from "../Assets/Images4.jpg";

const Caurasal = () => {
  const data = [
    {
      id: 1,
      image: `../Assets/Image1.png`,
    },

    {
      id: 2,
      image: `../Assets/Images2.jpeg`,
    },

    {
      id: 3,
      image: `../Assets/Images3.png`,
    },

    {
      id: 4,
      image: `../Assets/Images4k.jpeg`,
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((d, i) => (
          <div key={i}>
            <img src={d.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caurasal;
