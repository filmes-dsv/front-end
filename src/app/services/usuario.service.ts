import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  baseUrl = "http://localhost:5000/api/usuario/";

  constructor(private http: HttpClient) {}

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}list`);
  }

  getById(id: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}getById/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}create`, usuario);
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}update`, usuario);
  }

  deletarUsuario(id: string): Observable<Usuario[]> {
    return this.http.delete<Usuario[]>(`${this.baseUrl}delete/${id}`);
  }
}
