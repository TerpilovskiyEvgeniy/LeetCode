const maxProfit = (prices) => {
 let maxValue = Math.max(...prices);
 let maxProfitOfSale = 0;
 let overallProfit = 0;
   for (let i = 0; i < prices.length; i++) {
       if (prices[i] < maxValue){
       maxValue = prices[i]
       }
       maxProfitOfSale = prices[i] - maxValue;
       if (overallProfit < maxProfitOfSale){
       overallProfit = maxProfitOfSale
       }
   }

   return overallProfit
}
console.log(maxProfit([7,6,4,3,1]))