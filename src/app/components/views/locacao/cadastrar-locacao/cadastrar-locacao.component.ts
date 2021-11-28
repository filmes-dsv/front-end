import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme";
import { Locacao } from "src/app/models/locacao";
import { Usuario } from "src/app/models/usuario";
import { FilmeService } from "src/app/services/filme.service";
import { LocacaoService } from "src/app/services/locacao.service";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-cadastrar-locacao",
  templateUrl: "./cadastrar-locacao.component.html",
  styleUrls: ["./cadastrar-locacao.component.css"],
})
export class CadastrarLocacaoComponent implements OnInit {
  filmeId!: number;
  usuarioId!: number;
  arrayFilmes: Filme[] = [];
  arrayClientes: Usuario[] = [];

  constructor(
    private service: LocacaoService,
    private serviceFilme: FilmeService,
    private serviceCliente: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.serviceFilme.list().subscribe((filmes) => {
      this.arrayFilmes = filmes;
    });

    this.serviceCliente.list().subscribe((clientes) => {
      this.arrayClientes = clientes;
    });
  }

  atualizaFilme(val: any): void {
    this.filmeId = val.value.id;
  }

  atualizaCliente(val: any): void {
    this.usuarioId = val.value.id;
  }

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
