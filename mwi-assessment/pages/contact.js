import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Input from "../components/input";
import axios from "axios";

export default function Contact({ contactContent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

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
    <div className="lg:flex ">
      <div className="h-max p-4 sm:p-10 lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-evenly lg:p-0 ">
        <Header href="/" path="home" cn="contact_header" />
        <section className="mx-4 lg:p-4">
          {contactContent?.map((contentData) => {
            return (
              <div
                key={contentData.id}
                className="lg:flex lg:flex-col lg:item-start lg:w-10/12 lg:ml-10 "
              >
                <h1 className="text-4xl font-poppins_bold mb-6 mt-10 border-gold border-b-4 w-max lg:text-5xl">
                  {contentData.title}
                </h1>
                <p className="my-10 lg:w-full lg:text-l lg:mt-4 lg:leading-6 ">
                  {contentData.content}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      <section className="bg-lightGray p-8 h-max lg:h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:p-12">
        <h1 className="my-5 text-darkGray font-poppins_bold text-4xl">
          Heading Two
        </h1>

        <form
          className="text-darkGray flex flex-col lg:pl-2 "
          onSubmit={handleSubmit}
        >
          <div className="lg:flex lg:justify-between w-full">
            <Input
              divClass="input-div-left"
              errorClass="form-error-left"
              isValid={firstNameValid}
              submitTried={submitTried}
              onChange={setFirstName}
              placeholder="First Name"
              value={firstName}
            />
            <Input
              divClass="input-div-right"
              errorClass="form-error-right"
              isValid={lastNameValid}
              submitTried={submitTried}
              onChange={setLastName}
              placeholder="Last Name"
              value={lastName}
            />
          </div>

          <div className="lg:flex lg:justify-between lg:w-full">
            <Input
              divClass="input-div-left"
              errorClass="form-error-left"
              isValid={titleValid}
              submitTried={submitTried}
              onChange={setTitle}
              placeholder="Title"
              value={title}
            />

            <Input
              divClass="input-div-right"
              errorClass="form-error-right"
              isValid={emailValid}
              submitTried={submitTried}
              onChange={setEmail}
              placeholder="Email"
              value={email}
            />
          </div>
          <div className="relative">
            <textarea
              autoComplete="off"
              className={
                messageValid
                  ? "textarea-primary"
                  : submitTried && !messageValid
                  ? "textarea-invalid"
                  : "textarea-primary"
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
