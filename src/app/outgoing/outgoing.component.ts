import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  audio = new Audio()
  getCallerNumber: any
  getCallerName: any
  ifCallAccept: boolean = true
  Audio_1OnTrigger: any
  Audio_2OnTrigger: any
  currTime: number;
  obsTimer: Observable<number> = timer(1000, 1000);
  stopTimer: any
  constructor(
    private _location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getCallerNumber = (params)
      this.getCallerName = (params)
    })
    this.playSound()
  }

  sound1Play(state: any) {
    this.audio.src = "../assets/mixkit-sport-start-bleeps-918.wav"
    if (state == 'play') {
      this.audio.play();
    } else if (state === 'pause') {
      this.audio.pause();
    }
  }
  sound2Play(state: any) {
    this.audio.src = "../assets/telephone-ring-02.wav"

    if (state == 'play') {
      this.audio.play();
    } else if (state === 'pause') {
      this.audio.pause();
    }
  }
  sound3Play(state: any) {
    this.audio.src = "../assets/self-destruct-sequence-31505.mp3"
    this.audio.loop = true
    if (state == 'play') {
      this.audio.play();
    } else if (state === 'pause') {
      this.audio.pause();
    }
  }

  playSound() {
    this.sound1Play('play');
    this.Audio_1OnTrigger = setTimeout(() => {
      this.sound1Play('pause')
      this.sound2Play('play')
      this.Audio_2OnTrigger = setTimeout(() => {
        this.ifCallAccept = false
        this.sound2Play('pause')
        this.stopTimer = this.obsTimer.subscribe(currTime => this.currTime = currTime);
        this.sound3Play('play')
      }, 5000);
    }, 2000);

  }
  onDisconnect(currTime: any) {
    clearTimeout(this.Audio_1OnTrigger)
    clearTimeout(this.Audio_2OnTrigger)
    this.sound3Play('pause')
    if (currTime > 0) {
      this.stopTimer.unsubscribe()
      let contact = JSON.parse(localStorage.getItem('Contacts') as any)
      let index = contact.findIndex((e: any) => e.number === this.getCallerNumber.items)
      contact[index] = { ...contact[index], currentTime: contact[index].currentTime || [] }
      contact[index].currentTime.push(currTime ? currTime : 0)
      localStorage.setItem('Contacts', JSON.stringify(contact))
    }
    this._location.back()
  }
}
