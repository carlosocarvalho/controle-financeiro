import React from "react";

interface UserProps {
  name: string;
}

interface UserContract {
  showProfile: boolean;
  handleShowProfile(): void;
  user: UserProps | null;
}

export const UserContext = React.createContext({} as UserContract);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<UserProps | null>(null);
  const [showProfile, setShowProfile] = React.useState(false);

  function handleShowProfile() {
    setShowProfile((s) => !s);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleShowProfile,
        showProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
