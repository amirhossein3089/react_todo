import { observable, decorate, computed, action } from "mobx";
 class Store{
    time = 0

    constructor(){
    this.time = new Date()
    this.interval = setInterval(()=>{
        this.time = new Date()
    },1000)
    }

    pauseClock(){
        clearInterval(this.interval)
    }
    startClock(){
        this.interval = setInterval(()=>{
            this.time = new Date()
        },1000)
    }
}

decorate(Store, {
    time: observable,
    pauseClock: action,
  });

const store = new Store()
export default store