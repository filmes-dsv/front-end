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

  ngOnInit(): void {
    this.service.list().subscribe((locs) => {
      this.locacoes = locs;

      locs.map((loc, index) => (this.locacoes[index].filme = loc.filme.titulo));

      locs.map(
        (loc, index) => (this.locacoes[index].usuario = loc.usuario.nome)
      );
    });
  }

  atualizar(val: any): void {
    this.id = val.value.id;
  }

  deletar(): void {
    this.service.deletarLocacao(this.id).subscribe((locacoes) => {
      this.router.navigate(["filme/listar"]);
    });
  }
}
