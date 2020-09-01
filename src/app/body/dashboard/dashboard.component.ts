import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  showDisciplines = false;
  showGroups = false;

  ngOnInit(): void {
  }

  toggleDisciplines(): void {
    this.showDisciplines = !this.showDisciplines;
  }

  toggleGroups(): void {
    this.showGroups = !this.showGroups;
  }
}
