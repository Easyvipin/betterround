import ThemeToggle from "@src/Components/ThemeToggle";
import { getCurrentTheme } from "@src/utils/toggleMode";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCurrentTheme();
  }, []);

  const handleSignUp = async () => {
    const { data } = await axios.post("/api/signup", {
      phoneNumber: "+919877879055",
    });
  };

  return (
    <main className={`p-24 dark:bg-black`}>
      <ThemeToggle />
      <button onClick={handleSignUp}>Signup</button>
      <h2 className="text-black dark:text-white ">Page </h2>
    </main>
  );
}
