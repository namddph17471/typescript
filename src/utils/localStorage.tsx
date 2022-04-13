export const isAuthenticate = ()=>{
    const user = JSON.parse(localStorage.getItem("user") as string);

    if (!user) return false;

    return user;
}