class AlarmClock{
    constructor(id = null){
        this.alarmCollection = [];
        this.intervalId = id;
    }
    addClock(time, func){
        if (!(!!time && !!func)){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.map(item => item.time).includes(time)){
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({callback: func, time: time, canCall: true})
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time)
    }
    getCurrentFormattedTime(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return `${hours}:${minutes}`;
    }
    start(){
        if (this.intervalId){
            return
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach(i => {
            if ((i.time === this.getCurrentFormattedTime()) && i.canCall){
                i.canCall = false;
                return i.callback();
            }
        }), 1000)
    }   
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(i => i.canCall = true)
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}