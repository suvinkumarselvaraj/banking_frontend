const reducer = (state, action)=>
{
    console.log(action.type);
    {
        switch(action.type){
            

            case 'Add_logged_user':
                return{
                    ...state,
                    active_user: action.logged_user
                }
                break;
        }
    }
}
    export default reducer;