import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Locacao } from "src/app/models/locacao";
import { LocacaoService } from "src/app/services/locacao.service";

@Component({
  selector: "app-atualizar-locacao",
  templateUrl: "./atualizar-locacao.component.html",
  styleUrls: ["./atualizar-locacao.component.css"],
})
export class AtualizarLocacaoComponent implements OnInit {
  filmeId!: number;
  usuarioId!: number;
  id!: number;

  constructor(private service: LocacaoService, private router: Router) {}

  ngOnInit(): void {}

  update(): void {
    let locacao: Locacao = {
      filmeId: this.filmeId,
      usuarioId: this.usuarioId,
      id: this.id,
    };
    this.service.atualizarLocacao(locacao).subscribe((locacao) => {
      this.router.navigate(["locacao/listar"]);
    });
  }
}
