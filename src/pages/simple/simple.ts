import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-simple',
  templateUrl: 'simple.html',
})
export class SimplePage {

  private timeInSeconds: number = 0;
  private currentTime: number = 0;
  private timerInterval;
  private con;
  private running: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ngOnInit() {
      this.initTimer();
  }


  initTimer() {
      this.currentTime = this.timeInSeconds;
      this.con = document.getElementById("content");
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if(this.currentTime < 500){
        this.currentTime++;
      }
      if(this.currentTime == 500){
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
}
