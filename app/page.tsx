import React from "react";
import data from "../links.json";

export default function Index() {
  return (
    <main className="flex flex-col justify-center mx-auto h-screen max-w-[500px] gap-6 text-center">
      <div>
        <h1 className="font-[Inter] text-2xl text-white font-bold">
          {data.name}
        </h1>
        <p className="font-[Inter] text-lg text-white/50 font-base">
          {data.description}
        </p>
      </div>
      <div className="flex flex-col gap-1 px-4">
        {data.links.map((link) => (
          <a
            key={link.link}
            href={link.link}
            target="_blank"
            className="bg-white/5 text-center text-white py-2 rounded-md font-[Inter] text-sm border-2 hover:border-white/5 hover:bg-transparent border-transparent duration-200"
          >
            {link.icon ? <img src={link.icon} /> : null}
            {link.name}
          </a>
        ))}
      </div>
    </main>
  );
}
