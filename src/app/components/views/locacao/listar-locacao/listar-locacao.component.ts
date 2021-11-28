import { Component, OnInit } from "@angular/core";
import { Locacao } from "src/app/models/locacao";
import { LocacaoService } from "src/app/services/locacao.service";

@Component({
  selector: "app-listar-locacao",
  templateUrl: "./listar-locacao.component.html",
  styleUrls: ["./listar-locacao.component.css"],
})
export class ListarLocacaoComponent implements OnInit {
  locacoes: Locacao[] = [];
  constructor(private service: LocacaoService) {}

  ngOnInit(): void {
    this.service.list().subscribe((locs) => {
      this.locacoes = locs;

      locs.map((loc, index) => (this.locacoes[index].filme = loc.filme.titulo));

      locs.map(
        (loc, index) => (this.locacoes[index].usuario = loc.usuario.nome)
      );
    });
  }
}
