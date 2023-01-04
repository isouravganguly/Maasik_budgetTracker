import React, {useState, createContext} from 'react';

export const EmailContext = createContext();

const EmailProvider = ({children}) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const EmailHandler = email => {
    setEmail(email);
  };

  const nameHandler = name => {
    setName(name);
  };

  const userobj = {
    email,
    name,
    EmailHandler,
    nameHandler,
  };

  return (
    <EmailContext.Provider value={userobj}>{children}</EmailContext.Provider>
  );
};

export default EmailProvider;
