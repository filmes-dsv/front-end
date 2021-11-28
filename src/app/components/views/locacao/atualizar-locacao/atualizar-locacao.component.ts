import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Locacao } from "src/app/models/locacao";
import { Filme } from "src/app/models/filme";
import { FilmeService } from "src/app/services/filme.service";
import { LocacaoService } from "src/app/services/locacao.service";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-atualizar-locacao",
  templateUrl: "./atualizar-locacao.component.html",
  styleUrls: ["./atualizar-locacao.component.css"],
})
export class AtualizarLocacaoComponent implements OnInit {
  filmeId!: number;
  usuarioId!: number;
  id!: number;
  locacoes: Locacao[] = [];
  usuarios: Usuario[] = [];
  filmes: Filme[] = [];
  arrayFilmes: Filme[] = [];
  arrayClientes: Usuario[] = [];

  constructor(
    private router: Router,
    private service: LocacaoService,
    private service2: FilmeService,
    private service3: UsuarioService
  ) {}

  ngOnInit(): void {
    this.service2.list().subscribe((filmes) => {
      this.arrayFilmes = filmes;
    });

    this.service3.list().subscribe((clientes) => {
      this.arrayClientes = clientes;
    });

    this.service.list().subscribe((locs) => {
      this.locacoes = locs;

      locs.map((loc, index) => (this.locacoes[index].filme = loc.filme.titulo));

      locs.map(
        (loc, index) => (this.locacoes[index].usuario = loc.usuario.nome)
      );

      this.service2.list().subscribe((filmes) => {
        this.filmes = filmes;
      });

      this.service3.list().subscribe((usuarios) => {
        this.usuarios = usuarios;
      });
    });
  }

  atualizaFilme(val: any): void {
    this.filmeId = val.value.id;
  }

  atualizaCliente(val: any): void {
    this.usuarioId = val.value.id;
  }

  atualizar(val: any): void {
    this.id = val.value.id;
  }

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
