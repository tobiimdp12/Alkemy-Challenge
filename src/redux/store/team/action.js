//todas las acciones retornan un objeto
const refreshTeam =()=>
{
    return{
        type:"REFRESHTEAM",
        payload:JSON.parse(localStorage.getItem("userHeroes")),
    }
}



export {refreshTeam};