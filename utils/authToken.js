
const  authToken = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    
    if(user && user.token) {
        return ({"Authorization" : "Bearer " +  user.token})
    }
    return window.location="/login"

}


export default authToken