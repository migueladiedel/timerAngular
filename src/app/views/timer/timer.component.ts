import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  public minutes: number;
  public seconds: number;
  public isPaused: boolean;
  public buttonLabel: string;

  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void {
    this.isPaused = true;
    this.minutes = 25;
    this.seconds = 0;
    this.buttonLabel = 'Start';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
