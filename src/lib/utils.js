export {cn} from "cn"
import {format, formatDistanceToNow, parseISO} from "date-fns";

export function formatPrice(amount , currency = "INR"){
    const value = Number(amount);
    if(!value) return "Free";
    return new Intl.NumberFormat("en-IN" , 
        {style : "currency" ,
        currency : "INR",
        maximumFractionDigits : 0
    })
        .format(value);
}

export function FormatDate(sdate){
    if (!sdate) return "";
    const date  = typeof sdate === 'string' ? parseISO(sdate) : sdate;
    
    return format(date , "E, LLL dd, yyyy");
}

export function formatTimeRange(startDate, endDate ){
    if(!startDate || !endDate){
        return "";
    }
    const start = parseISO(startDate);
    const startTime = format(start,"h:mm a");
    const end = parseISO(endDate)
    const endTime = format(end, "h:mm a");
    return `${startTime} - ${endTime}`
}

export function getRemainingDays(startDate){
    if(!startDate) return "";
    const eventDate = parseISO(startDate);
    const currentDate = new Date();
    if(currentDate > eventDate){
        return "Event is Done and Dusted"
    }
    return formatDistanceToNow(eventDate, {addSuffix : true});
}