import { Component, OnInit, Input } from '@angular/core';

import { CoracaoModel } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes: CoracaoModel[] = [
    new CoracaoModel(true),
    new CoracaoModel(true),
    new CoracaoModel(true)
  ];

  @Input('tentativasFilho')
  public tentativas!: number;

  constructor() {
    console.log(this.coracoes);
    
  }

  ngOnInit(): void {
    console.log('Vidas: ' + this.tentativas);
  }

}
