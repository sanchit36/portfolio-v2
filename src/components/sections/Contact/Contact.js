import { Circle } from "better-react-spinkit";
import React, { useState } from "react";
import instance from "../../../axios";
import { Container, DARKBG, Section } from "@/styles/globalStyle";
import { Button } from "../../Button/Button.styles";
import { Form } from "./Contact.styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [usermsg, setUserMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    instance
      .post("contact", {
        name,
        email,
        message,
      })
      .then(() => {
        setSending(false);
        setUserMsg("Thanks for contacting");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error.message);
        setSending(false);
        setUserMsg("Something went wrong try again");
        setName("");
        setEmail("");
        setMessage("");
      });

    setTimeout(() => setUserMsg(""), 5000);
  };

  return (
    <React.Fragment>
      <Section style={{ paddingBottom: "2rem", backgroundColor: DARKBG }}>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "2rem" }}>Get in Touch</h2>
          <Form onSubmit={handleSubmit}>
            <input
              autoComplete="name"
              autoCapitalize="words"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              required
            ></textarea>
            <Button
              style={{ display: "grid", placeItems: "center" }}
              disabled={sending}
              type="submit"
            >
              {sending ? <Circle /> : "Send"}
            </Button>
          </Form>
          {usermsg && <p>{usermsg}</p>}
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
