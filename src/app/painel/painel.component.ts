import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public respostaUsuario!: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event): void {
    this.respostaUsuario = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.respostaUsuario) {
      /**Trocar a pergunda da rodada */
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada]; 
    }

  }
}
