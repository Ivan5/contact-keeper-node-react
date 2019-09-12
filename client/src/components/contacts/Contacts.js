import React, { useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../contacts/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.lenght === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </>
  );
};

export default Contacts;
