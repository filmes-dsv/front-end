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
    this.service.list().subscribe((locacoes) => {
      this.locacoes = locacoes;
    }); //subscribe avisa quando tiver resposta
  }
}
