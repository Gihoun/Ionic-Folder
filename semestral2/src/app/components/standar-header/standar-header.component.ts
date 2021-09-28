import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standar-header',
  templateUrl: './standar-header.component.html',
  styleUrls: ['./standar-header.component.scss'],
})
export class StandarHeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() icono: string;
  constructor() { }

  ngOnInit() {}

}
