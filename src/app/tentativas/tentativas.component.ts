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
  }

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice -1].cheio = false;
    }

  }

  ngOnInit(): void {
  }

}
