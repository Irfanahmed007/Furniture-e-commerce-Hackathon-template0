import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-amber-100 flex items-center justify-center h-[100vh]">
        <div className="flex flex-col items-start justify-center w-1/2 pl-10">
          <h1 className="text-4xl font-bold text-black mb-4">
            Rocket Single <br />
            Seater
          </h1>
          <a href="#" className="text-black underline text-sm hover:text-gray-700 transition">
            Shop Now
          </a>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image
            src="/image/rocket_chair.jpeg"
            alt="Rocket Single Seater"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Top Pick Section */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4 flex justify-between">
          {["side_table.jpeg", "side_table_2.jpeg"].map((src, idx) => (
            <div key={idx} className={`w-1/2 ${idx === 0 ? "pr-4" : "pl-4"}`}>
              <Image src={`/image/${src}`} alt="Side Table" width={400} height={400} className="object-contain" />
              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a href="#" className="underline text-sm">
                View More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Top Picks For You</h2>
          <p className="text-gray-500 text-lg mb-8">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { src: "product1.jpeg", title: "Trenton modular sofa_3" },
              { src: "product2.jpeg", title: "Granite dining table with dining chair" },
              { src: "product3.jpeg", title: "Outdoor bar table and stool" },
              { src: "product4.jpeg", title: "Plain console with teak mirror" },
            ].map((product, idx) => (
              <div key={idx} className="text-center">
                <Image
                  src={`/image/${product.src}`}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="object-contain mx-auto"
                />
                <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
                <p className="text-lg font-bold">Rs. 25,000.00</p>
              </div>
            ))}
          </div>
          <a href="#" className="underline text-sm mt-4 inline-block">
            View More
          </a>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="bg-amber-100 py-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Image src="/image/asgaardsofa.jpeg" alt="Asgaard Sofa" width={500} height={500} className="object-contain w-1/2 pr-4" />
          <div className="w-1/2 pl-4 text-center">
            <h3 className="text-xl font-semibold mb-6">New Arrivals</h3>
            <h2 className="text-5xl font-bold text-black mb-6">Asgaard Sofa</h2>
            <a
              href="/shop/asgaardsofa"
              className="border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white text-black py-10">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4">Our Blog</h2>
          <p className="text-lg">Find a bright idea to suit your taste with our great selection.</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-3 gap-4">
          {["blog1.png", "blog2.jpeg", "blog3.jpeg"].map((src, idx) => (
            <div key={idx} className="text-center">
              <Image src={`/image/${src}`} alt={`Blog Post ${idx + 1}`} width={300} height={300} className="object-contain mx-auto" />
              <p className="text-lg mt-4">Going all-in with millennial design</p>
              <a href="#" className="underline font-bold text-xl">
                Read More
              </a>
              <div className="flex justify-center gap-4 mt-2">
                <span>⏰ 5 mins</span>
                <span>📅 {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/blog" className="underline text-sm">
            View All Posts
          </a>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
          <p className="text-lg mb-4">Follow our store on Instagram</p>
          <a
            href="#"
            className="border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
          >
            Follow Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
