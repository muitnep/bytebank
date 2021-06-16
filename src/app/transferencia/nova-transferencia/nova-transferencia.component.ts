import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private route: Router) { }

  transferir() {

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.route.navigateByUrl('extrato');
    },
      error => {
        console.error(error);
      });


  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
