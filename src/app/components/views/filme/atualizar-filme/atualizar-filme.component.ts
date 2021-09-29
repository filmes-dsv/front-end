import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme";
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: "app-atualizar-filme",
  templateUrl: "./atualizar-filme.component.html",
  styleUrls: ["./atualizar-filme.component.css"],
})
export class AtualizarFilmeComponent implements OnInit {
  titulo!: string;
  duracao!: number;
  diretor!: string;
  status!: string;
  ano!: number;
  id!: number;
  genero!: string;

  constructor(private service: FilmeService, private router: Router) {}

  ngOnInit(): void {}

  update(): void {
    let filme: Filme = {
      titulo: this.titulo,
      duracao: this.duracao,
      genero: this.genero,
      diretor: this.diretor,
      ano: this.ano,
      id: this.id,
      status: this.status,
    };
    this.service.atualizarFilme(filme).subscribe((filme) => {
      this.router.navigate(["filme/listar"]);
    });
  }
}
