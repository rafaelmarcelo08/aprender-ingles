import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CoracaoModel } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public teste: number = 0;

  public coracoes: CoracaoModel[] = [
    new CoracaoModel(true),
    new CoracaoModel(true),
    new CoracaoModel(true)
  ];

  @Input('tentativasFilho')
  public tentativas!: number;

  constructor() {
    console.log('constructor: ' + this.tentativas);
  }

  ngOnChanges(): void {
    console.log('Vidas: ngOnChanges ' + this.tentativas);
  }

  ngOnInit(): void {
    console.log('Vidas: ngOnInit' + this.tentativas);
  }

}
