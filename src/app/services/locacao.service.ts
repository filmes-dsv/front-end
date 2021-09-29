import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Locacao } from "../models/locacao";

@Injectable({
  providedIn: "root",
})
export class LocacaoService {
  baseUrl = "http://localhost:5000/api/locacao/";

  constructor(private http: HttpClient) {}

  list(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.baseUrl}list`);
  }

  getById(id: number): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.baseUrl}getById/${id}`);
  }

  create(locacao: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(`${this.baseUrl}create`, locacao);
  }

  deletarLocacao(id: string): Observable<Locacao[]> {
    return this.http.delete<Locacao[]>(`${this.baseUrl}delete/${id}`);
  }

  atualizarLocacao(Locacao: Locacao): Observable<Locacao> {
    return this.http.put<Locacao>(`${this.baseUrl}update`, Locacao);
  }
}
