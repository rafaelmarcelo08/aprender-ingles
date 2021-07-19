import { Component, OnInit } from '@angular/core';

import { CoracaoModel } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';
  
  public coracoes: CoracaoModel[] = [
    new CoracaoModel(true),
    new CoracaoModel(true),
    new CoracaoModel(true)
  ];
  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit(): void {
  }

}
