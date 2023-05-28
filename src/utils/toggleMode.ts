export const toggleMode = (theme: string) => {
  if (!document.documentElement.classList.contains("dark") && theme == "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

export const getCurrentTheme = () => {
  console.log("called");
  if (localStorage.theme === "dark") {
    console.log("true");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
