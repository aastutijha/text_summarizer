import { createContext, useContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from  "../firebase";
import { useHistory } from "../Components/HistoryContext"; 

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { addToHistory } = useHistory(); // Use the useHistory hook

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function updateUserProfile(username, profilePicture) {
    setUser((prevUser) => ({
      ...prevUser,
      name: username,
      profilePicture: profilePicture,
    }));
  }

  function UserProfile() {
    const { user } = useUserAuth();

    return (
      <div>
        <h1>{user.name}</h1>
        <img src={user.profilePicture} alt="Profile" />
      </div>
    );
  }

  function uploadProfilePicture(imageFile) {
    const storage = getStorage();
    const storageRef = ref(storage, `profilePictures/${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle the upload progress here
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          // Then, update the user's profile in Firebase Authentication
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              // The user's profile has been updated.

              // Update the user state
              updateUserProfile(auth.currentUser.displayName, downloadURL);

              // Add user info to history
              addToHistory(
                { input: "Profile Picture Update", output: "Success" },
                auth.currentUser.uid
              );
            })
            .catch((error) => {
              // An error occurred
              console.error(error);
            });
        });
      }
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName,
          profilePicture: currentUser.photoURL || "",
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
    UserProfile,
    setUser,
    updateUserProfile,
    uploadProfilePicture,
  };

  return (
    <userAuthContext.Provider value={contextValue}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

