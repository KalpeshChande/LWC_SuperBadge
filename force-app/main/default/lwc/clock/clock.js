import { LightningElement, track} from 'lwc';

export default class WhatToDo extends LightningElement {
   @track time="8:15 PM";
   @track greeting="Good Morning";


    connectedCallback(){
        this.getTime();

        setInterval(() => {
            this.getTime();
            console.log("set interval called");
        },1000*60);

    }


    getTime(){
        const date=new Date();
        const hour=date.getHours();
        const min=date.getMinutes();
        this.time = `${this.getHours(hour)}:${this.getDoubleDigit(
            min
          )} ${this.getMidDay(hour)}`;
          //get greeting (mornig/afternoon/evening/)
          this.setGreeting(hour);

    }

    getHours(hour){
        return hour==0 ? "12" : hour>12 ? (hour-12):hour;
    }
    getMidDay(hour){
        if(hour>=12){
            return "PM"
        }else{
            return "AM"
        }
        //return hour >=12 ? "PM" : "AM";
    }
    getDoubleDigit(digit){
        return digit<10 ? "0"+digit : digit;
    }

    setGreeting(hour){
        if(hour<12){
            this.greeting="Good Morning";
        }else if(hour>=12 && hour<17){
            this.greeting="Good Afternoon";
        }else{
            this.greeting="Good Evening";
        }
    }
}