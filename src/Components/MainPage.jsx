import React from "react";

function Home() {
  const hijabs = [
    { id: 1, name: "Casual Hijab", img: "https://www.shutterstock.com/image-illustration/hijab-girl-cute-covering-her-260nw-1764467282.jpg" },
    { id: 2, name: "Formal Hijab", img: "https://images.pexels.com/photos/9434046/pexels-photo-9434046.jpeg" },
    { id: 3, name: "Wedding Hijab", img: "https://blackcamels.com.pk/cdn/shop/products/01-9_60605c6d-6189-47ee-8e4c-330f3ea010c5.jpg?v=1755264076" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Hijab Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hijabs.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded p-4 flex flex-col items-center"
          >
            <img src={item.img} alt={item.name} className="w-48 h-60 object-cover rounded mb-3" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
