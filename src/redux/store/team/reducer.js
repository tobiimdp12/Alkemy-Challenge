const initialState =
{
    team:JSON.parse(localStorage.getItem("userHeroes")),

};



export default (state=initialState,action)=>
{
    switch(action.type)
    {
        case "REFRESHTEAM":
        {
            //...state, retornan todo el estado
            return { ...state, team:state.team=JSON.parse(localStorage.getItem("userHeroes"))}
        }
       
        default:return state;
    }
}

export const selectCurrentTeam=(state)=>
{
    return state.teamReducer.team;
}
