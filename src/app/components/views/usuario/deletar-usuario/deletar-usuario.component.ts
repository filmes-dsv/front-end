import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-deletar-usuario",
  templateUrl: "./deletar-usuario.component.html",
  styleUrls: ["./deletar-usuario.component.css"],
})
export class DeletarUsuarioComponent implements OnInit {
  id!: string;
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

  delete(): void {
    this.service.deletarUsuario(this.id).subscribe((user) => {
      this.router.navigate(["usuario/listar"]);
    });
  }
}
