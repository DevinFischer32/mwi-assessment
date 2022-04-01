import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HomeContent from "../components/homeContent";
import Header from "../components/header";
import Talkie from "../public/Talkie.svg";
import Rabbit from "../public/Rabbit.svg";
import Sheild from "../public/Shield.svg";

export default function Home({ content }) {
  const [clickedLink, setClickedLink] = useState(false);
  const [revealPuzzle, setRevealPuzzle] = useState(false);
  const [message, setMessage] = useState("");

  const obj1 = [
    { name: "Matt Johnson" },
    { name: "Matt Johnson" },
    { name: "Bart Paden" },
    { name: "Ryan Doss" },
    { name: "Jared Malcolm" },
  ];
  const obj2 = [
    { name: "Matt Johnson" },
    { name: "Bart Paden" },
    { name: "Bart Paden" },
    { name: "Jordan Heigle" },
    { name: "Jordan Heigle" },
    { name: "Tyler Viles" },
  ];

  let merged = [...obj1, ...obj2];
  let set = new Set();
  let finalMerge = merged.filter((item) => {
    if (!set.has(item.name)) {
      set.add(item.name);
      return true;
    }
    return false;
  }, set);

  const puzzle = () => {
    if (clickedLink === true && revealPuzzle === false) {
      setRevealPuzzle(true);
    } else if (clickedLink === true && revealPuzzle === true) {
      setMessage("Already Revealed");
      setTimeout(() => {
        setMessage("");
      }, 2500);
    }
  };

  useEffect(() => {
    clickedLink && puzzle();
  }, [clickedLink]);

  return (
    <section className="p-2 sm:p-10 lg:px-8 lg:py-4  ">
      <Header href="/contact" path="contact" cn="home_header" />

      <section className="flex flex-col items-center justify-items-center  lg:grid  lg:grid-cols-3 ">
        {content &&
          content.map((contentData, idx) => {
            let icon;
            let alt;
            if (idx === 0) {
              icon = Talkie;
              alt = "Walkie Talkie";
            } else if (idx === 1) {
              icon = Rabbit;
              alt = "Rabbit";
            } else if (idx === 2) {
              icon = Sheild;
              alt = "Sheild";
            }
            return (
              <HomeContent
                content={contentData}
                key={contentData.id}
                img={icon}
                alt={alt}
              />
            );
          })}
      </section>

      <footer className="m-4 mt-8 relative">
        {message && (
          <div className="absolute top-14 md:top-10 lg:top-10 text-Red">
            {message}
          </div>
        )}
        <h1 className="text-4xl mb-10 font-poppins_bold md:text-5xl ">
          <span className="border-gold pb-1 border-b-4">Heading</span> One
        </h1>
        <p className="mt-6 text-base">
          Remove the duplicates in 2 Javascript objects (found in readme),add
          the results to an array and output the list of distinct names in an
          unordered list below this paragraph when{" "}
          <span
            className="border-gold border-b-2 text-gold"
            onClick={() => {
              setClickedLink(true);
              console.log("click");
              puzzle();
            }}
          >
            this link
          </span>{" "}
          is clicked. If the operation has been completed already, notify the
          user that this has already been done.{" "}
        </p>
        <ul className={revealPuzzle ? "text-gold" : "hidden"}>
          {finalMerge &&
            finalMerge.map((name, idx) => {
              return <li key={idx}>{name.name}</li>;
            })}
        </ul>
      </footer>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/api/content/home");
  const data = await response.json();
  return {
    props: {
      content: data,
    },
  };
}
