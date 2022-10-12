import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessions: any
  onAdd() {
    let data = { name: 'Satish', number: 123456789 }
    localStorage.setItem('session', JSON.stringify(data))
  }
  loadData() {
    let data = localStorage.getItem('session')
    this.sessions = JSON.parse(data as any)
  }
}
