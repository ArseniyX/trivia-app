import { useState, useEffect, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
} from "firebase/auth";
import "firebase/auth";

// Initialize
initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MEASUREMENT_ID,
  appID: process.env.REACT_APP_APP_ID,
});

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
  };

  const sendPassResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email).then(() => {
      return true;
    });
  };

  const confirmPassReset = (code, password) => {
    return confirmPasswordReset(auth, code, password).then(() => {
      return true;
    });
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      return true;
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // Cleanup subscription on unmount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPassResetEmail,
    confirmPassReset,
    updateName,
  };
};
