import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contact({ contactContent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [titleValid, setTitleValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [submitTried, setSubmitTried] = useState(false);

  useEffect(() => {
    if (submitTried === true) {
      firstName?.length ? setFirstNameValid(true) : setFirstNameValid(false);
      lastName?.length ? setLastNameValid(true) : setLastNameValid(false);
      title?.length ? setTitleValid(true) : setTitleValid(false);
      email?.length ? setEmailValid(true) : setEmailValid(false);
      message?.length ? setMessageValid(true) : setMessageValid(false);
    }
  }, [firstName, lastName, title, email, message, submitTried]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName?.length &&
      lastName?.length &&
      title?.length &&
      email?.length &&
      message?.length
    ) {
      try {
        axios.post("http://localhost:5000/api/contact", {
          firstName,
          lastName,
          title,
          email,
          message,
        });
      } catch (error) {
        console.error(error);
      }
      setFirstName("");
      setLastName("");
      setTitle("");
      setEmail("");
      setMessage("");
      setSubmitTried(false);
    } else {
      return;
    }
  };

  return (
    <div className="h-screen ">
      <div className="h-max p-4">
        <header className=" mt-2 mb-2 flex justify-between  items-center">
          <div className="w-4/6 h-12 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src={Logo}
              alt="Midwestern Logo"
            ></Image>
          </div>
          <Link href="/">
            <a className="text-gold font-poppins_bold">home</a>
          </Link>
        </header>

        <section>
          {contactContent?.map((contentData) => {
            let split = contentData.title.split(" ");
            let first = split[0];
            let second = split[1];
            return (
              <div key={contentData.id}>
                <h1 className="text-4xl font-poppins_bold mb-6 mt-10">
                  <span className="border-gold border-b-4">{first}</span>{" "}
                  {second}
                </h1>
                <p className="my-10">{contentData.content}</p>
              </div>
            );
          })}
        </section>
      </div>

      <section className="bg-lightGray p-4 h-max ">
        <h1 className="my-5 text-darkGray font-poppins_bold text-4xl">
          Heading Two
        </h1>

        <form className="text-darkGray flex flex-col " onSubmit={handleSubmit}>
          <div className="relative">
            <input
              autoComplete="off"
              className={
                firstNameValid
                  ? "inputs-primary"
                  : submitTried && !firstNameValid
                  ? "inputs-primary ring-2 ring-Red"
                  : "inputs-primary"
              }
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <p
              className={
                firstNameValid
                  ? "hidden"
                  : submitTried
                  ? "absolute right-2 top-4 z-10 text-Red"
                  : "hidden"
              }
            >
              Required
            </p>
          </div>

          <div className="relative">
            <input
              autoComplete="off"
              className={
                lastNameValid
                  ? "inputs-primary"
                  : submitTried && !lastNameValid
                  ? "inputs-primary ring-2 ring-Red"
                  : "inputs-primary"
              }
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <p
              className={
                lastNameValid
                  ? "hidden"
                  : submitTried
                  ? "absolute right-2 top-4 z-10 text-Red"
                  : "hidden"
              }
            >
              Required
            </p>
          </div>
          <div className="relative">
            <input
              autoComplete="off"
              className={
                titleValid
                  ? "inputs-primary"
                  : submitTried && !titleValid
                  ? "inputs-primary ring-2 ring-Red"
                  : "inputs-primary"
              }
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <p
              className={
                titleValid
                  ? "hidden"
                  : submitTried
                  ? "absolute right-2 top-4 z-10 text-Red"
                  : "hidden"
              }
            >
              Required
            </p>
          </div>
          <div className="relative">
            <input
              autoComplete="off"
              className={
                emailValid
                  ? "inputs-primary"
                  : submitTried && !emailValid
                  ? "inputs-primary ring-2 ring-Red"
                  : "inputs-primary"
              }
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p
              className={
                emailValid
                  ? "hidden"
                  : submitTried
                  ? "absolute right-2 top-4 z-10 text-Red"
                  : "hidden"
              }
            >
              Required
            </p>
          </div>
          <div className="relative">
            <textarea
              autoComplete="off"
              className={
                messageValid
                  ? "h-32 placeholder:text-midGray focus:outline-none focus:ring-0  text-midGray pl-2 bg-white w-full py-2 pr-3 mb-8 "
                  : submitTried && !messageValid
                  ? "h-32 placeholder:text-midGray focus:outline-none focus:ring-2 ring-2 ring-Red text-midGray pl-2 bg-white w-full py-2 pr-3 mb-8 "
                  : "h-32 placeholder:text-midGray focus:outline-none focus:ring-0  text-midGray pl-2 bg-white w-full py-2 pr-3 mb-8 "
              }
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <p
              className={
                messageValid
                  ? "hidden"
                  : submitTried
                  ? "absolute right-2 top-4 z-10 text-Red"
                  : "hidden"
              }
            >
              Required
            </p>
          </div>
          <button
            className="btn-primary m-auto mb-4"
            onClick={() => setSubmitTried(true)}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/api/content/contact");
  const data = await response.json();

  return {
    props: {
      contactContent: data,
    },
  };
}
