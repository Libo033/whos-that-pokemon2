export const storeName = (name: string) => {
  localStorage.setItem("Username", name);
};

export const deleteStoreName = () => {
  localStorage.removeItem("Username");
};
