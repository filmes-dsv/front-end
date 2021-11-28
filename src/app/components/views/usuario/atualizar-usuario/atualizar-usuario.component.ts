import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-atualizar-usuario",
  templateUrl: "./atualizar-usuario.component.html",
  styleUrls: ["./atualizar-usuario.component.css"],
})
export class AtualizarUsuarioComponent implements OnInit {
  nome!: string;
  id!: number;
  array: Usuario[] = [];

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((user) => {
      this.array = user;
    });
  }

  atualizar(val: any): void {
    this.id = val.value.id;
  }

  update(): void {
    let usuario: Usuario = {
      nome: this.nome,
      id: this.id,
    };

    this.service.atualizarUsuario(usuario).subscribe((user) => {
      this.router.navigate(["usuario/listar"]);
    });
  }
}
