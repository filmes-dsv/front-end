import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Locacao } from "src/app/models/locacao";
import { LocacaoService } from "src/app/services/locacao.service";

@Component({
  selector: "app-cadastrar-locacao",
  templateUrl: "./cadastrar-locacao.component.html",
  styleUrls: ["./cadastrar-locacao.component.css"],
})
export class CadastrarLocacaoComponent implements OnInit {
  filmeId!: number;
  usuarioId!: number;

  constructor(private service: LocacaoService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    let locacao: Locacao = {
      filmeId: this.filmeId,
      usuarioId: this.usuarioId,
    };
    this.service.create(locacao).subscribe((locacao) => {
      this.router.navigate(["locacao/listar"]);
    });
  }
}
