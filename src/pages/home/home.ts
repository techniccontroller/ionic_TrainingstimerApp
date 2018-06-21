import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private timeInSeconds: number = 180;
  private currentTime: number = 0;
  private timerInterval;
  private con;
  private running: boolean = false;

  private currentSet;



  constructor() {
  }

  ngOnInit() {
      this.initTimer();
  }


  initTimer() {
      this.currentTime = this.timeInSeconds;
      this.currentSet = 0;
      this.con = document.getElementById("content");
  }

  startTimer() {
    if(this.currentSet <5) this.currentSet++;
    else{
      this.currentSet = 0;
    }
    this.timerInterval = setInterval(() => {
      if(this.currentTime > -200){
        this.currentTime--;
      }
      if(this.currentTime < 0){
            this.con.style.backgroundColor = this.con.style.backgroundColor=="black"?"darkgrey":"black";
      }
      if(this.currentTime == -200){
        clearInterval(this.timerInterval);
      }
    }, 1000);
    this.running = true;
  }

  stopTimer(){
    this.currentTime = this.timeInSeconds;
    clearInterval(this.timerInterval);
    this.con.style.backgroundColor = "black";
    this.running = false;
  }

  setTimeInSeconds(time: number){
    this.timeInSeconds = time;
    this.currentTime = this.timeInSeconds;
    this.con.style.backgroundColor = "black";
  }

  repeat(){
    this.stopTimer();
    this.currentTime = this.timeInSeconds;
    this.currentSet = 0;
    this.con.style.backgroundColor = "black";
  }
}
