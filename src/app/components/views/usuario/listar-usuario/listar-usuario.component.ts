import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-listar-usuario",
  templateUrl: "./listar-usuario.component.html",
  styleUrls: ["./listar-usuario.component.css"],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.service.list().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
