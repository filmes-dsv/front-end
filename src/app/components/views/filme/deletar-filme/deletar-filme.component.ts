import { Component, OnInit } from "@angular/core";
import { Filme } from "src/app/models/filme";
import { Router } from "@angular/router";
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: "app-deletar-filme",
  templateUrl: "./deletar-filme.component.html",
  styleUrls: ["./deletar-filme.component.css"],
})
export class DeletarFilmeComponent implements OnInit {
  id!: string;
  arrayFilmes: Filme[] = [];

  locacoes: Filme[] = [];
  constructor(private service: FilmeService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((filmes) => {
      this.arrayFilmes = filmes;
    });
  }

  atualizaFilme(val: any): void {
    this.id = val.value.id;
  }

  delete(): void {
    this.service.deletarFilme(this.id).subscribe((user) => {
      this.router.navigate(["filme/listar"]);
    });
  }
}
