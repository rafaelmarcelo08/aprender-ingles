import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public respostaUsuario: string = '';

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizarRodada();
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event): void {
    this.respostaUsuario = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.respostaUsuario) {
      /**Trocar a pergunda da rodada */
      this.rodada++;

      if (this.rodada === 4) {
        alert('Concluiu as traduções com sucesso.');
        this.encerrarJogo.emit('Vitória');
      }

      if (this.rodada < 4) {
        this.atualizarRodada();
      }

      /** Aumento de progresso */
      this.progresso += 25;

    } else {
      this.tentativas--;
      if (this.tentativas < 0) {
        alert('Voce perdeu todas as tentativas');
        this.encerrarJogo.emit('Derrota');
        this.tentativas = 0;
      }
    }

  }

  public atualizarRodada(): void {
    /**Define a frase da rodada */
    this.rodadaFrase = this.frases[this.rodada];
    /**Limpar a resposta */
    this.respostaUsuario = '';
  }
}
