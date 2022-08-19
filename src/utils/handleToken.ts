export const setUserToLocalStorage = (
    token: string,
    isAuthenticated: string
  ) => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("access", token);
  };
  
  export const getTokenFromLocalStorage = () => {
    const bearerToken = `Bearer ${localStorage.getItem("access")}`;
    return bearerToken;
  };
  
  export const getUserAuthenticated = () => {
    if (localStorage.getItem("isAuthenticated") !== null) {
      const auth = JSON.parse(localStorage.getItem("isAuthenticated") as any);
      return auth;
    }
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("access");
  };
  