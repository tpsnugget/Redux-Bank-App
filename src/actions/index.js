export function withDrawMoney(amount){
   amount = Number(amount)
   return {
      type: "WITHDRAW_MONEY",
      amount: amount
   }
}