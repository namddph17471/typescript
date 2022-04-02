export const isAuthenticate = ()=>{
    if (!localStorage.getItem("user")) return false
    return JSON.parse(localStorage.getItem("user") as string)
}