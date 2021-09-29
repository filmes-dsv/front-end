import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme";
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: "app-cadastrar-filme",
  templateUrl: "./cadastrar-filme.component.html",
  styleUrls: ["./cadastrar-filme.component.css"],
})
export class CadastrarFilmeComponent implements OnInit {
  titulo!: string;
  duracao!: number;
  diretor!: string;
  status!: string;
  ano!: number;
  genero!: string;

  constructor(private service: FilmeService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    let filme: Filme = {
      titulo: this.titulo,
      duracao: this.duracao,
      genero: this.genero,
      diretor: this.diretor,
      ano: this.ano,
      status: "DISPONÍVEL",
    };
    this.service.create(filme).subscribe((filme) => {
      this.router.navigate(["filme/listar"]);
    });
  }
}
