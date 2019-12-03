export default (state, action) => {

   const { totalAmount } = state
   const { type, amount } = action

   switch(type){
      case "WITHDRAW_MONEY":
      if(totalAmount - amount >= 0){
         return {
            ...state,
            type: "WITHDRAW_MONEY",
            totalAmount: totalAmount - amount
         }
      }
      else{
         console.log("Sorry, you don't have enough money for that!")
         return state
      }
      default:
      return state
   }
}