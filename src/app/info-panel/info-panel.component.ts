import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

    lijst:string[] = ["hode", "goddamn", "wadeh", "hodehodehode"]

  constructor() { }

  ngOnInit(): void {
  }

}
