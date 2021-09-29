import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filme } from "../models/filme";

@Injectable({
  providedIn: "root",
})
export class FilmeService {
  baseUrl = "http://localhost:5000/api/filme/";

  constructor(private http: HttpClient) {}

  list(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseUrl}list`);
  }

  getById(id: number): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.baseUrl}getById/${id}`);
  }

  create(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(`${this.baseUrl}create`, filme);
  }

  deletarFilme(id: string): Observable<Filme[]> {
    return this.http.delete<Filme[]>(`${this.baseUrl}delete/${id}`);
  }

  atualizarFilme(Filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(`${this.baseUrl}update`, Filme);
  }
}
