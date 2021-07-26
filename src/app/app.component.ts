import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprender-inglês';

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento!: String;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }
}
