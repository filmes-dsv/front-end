import { Component, OnInit } from "@angular/core";
import { Locacao } from "src/app/models/locacao";
import { Router } from "@angular/router";
import { LocacaoService } from "src/app/services/locacao.service";

@Component({
  selector: "app-deletar-locacao",
  templateUrl: "./deletar.component.html",
  styleUrls: ["./deletar.component.css"],
})
export class DeletarLocacaoComponent implements OnInit {
  id!: string;

  locacoes: Locacao[] = [];
  constructor(private service: LocacaoService, private router: Router) {}

  ngOnInit(): void {}

  delete(): void {
    this.service.deletarLocacao(this.id).subscribe((locacoes) => {
      this.router.navigate(["filme/listar"]);
    });
  }
}
