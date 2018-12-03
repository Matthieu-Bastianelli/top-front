import { Component, OnInit, Input } from '@angular/core';
import {Collegue, Avis} from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;

  constructor() { }

  ngOnInit() {
  }

  incrementScore(avis:Avis){
    this.collegue.incrementScore(avis);
  }

}
