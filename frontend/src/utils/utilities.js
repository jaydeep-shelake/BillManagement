import { numToMonths ,monthlyArrayObj,months} from "./index";
const MOD_MONTHS = 12;
const groupByTimePeriod =( obj,
    timestamp,
    period,
    mod)=>{

        var objPeriod = monthlyArrayObj;
  var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  for (var i = 0; i < obj.length; i++) {
    var d = new Date(obj[i][timestamp]);
 
    var d2= 0;
    if (period === "day") {
      d2 = Math.floor(d.getTime() / oneDay);
    } else if (period === "week") {
      d2 = Math.floor(d.getTime() / (oneDay * 7));
    } else if (period === "month") {
      d2 = (d.getFullYear() - 1970) * 12 + d.getMonth();
    } else if (period === "year") {
      d2 = d.getFullYear();
    } else {
      console.log(
        "groupByTimePeriod: You have to set a period! day | week | month | year"
      );
    }
    // define object key
    objPeriod[d2 % mod] = objPeriod[d2 % mod] || [];
    objPeriod[d2 % mod].push(obj[i]);
  }
  return objPeriod;
}

export const getProcessedChartData = (billsArray) => {
     console.log(billsArray)
    var sumList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (billsArray === undefined) {
     
      return {
        data: sumList,
        labels: months,
      };
    }
  
    var objPeriodMonth = groupByTimePeriod(
      billsArray,
      "date",
      "month",
      MOD_MONTHS
    );
    
    var i = 0;
    for (i = 0; i < 12; i++) {
      sumList[i] = objPeriodMonth[i]
        .map((item) => item.amount)
        .reduce((prev, next) => prev + Math.round(next), 0);
    }
    const d = new Date();
    const monthNum = (d.getFullYear() - 1970) * 12 + d.getMonth();
    var monthIter = monthNum + 1;
    var monthArr = [];
   
    for (i = 0; i < 12; i++) {
      const num = monthIter % 12;
      
      
      monthArr.push(numToMonths[num]);
      monthIter += 1;
    }
    return {
      
      labels: monthArr,
    };
  };