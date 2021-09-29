import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarFilmeComponent } from "./components/views/filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent } from "./components/views/filme/cadastrar-filme/cadastrar-filme.component";
import { CadastrarUsuarioComponent } from "./components/views/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { ListarUsuarioComponent } from "./components/views/usuario/listar-usuario/listar-usuario.component";
import { DeletarLocacaoComponent } from "./components/views/locacao/deletar-locacao/deletar.component";
import { AtualizarLocacaoComponent } from "./components/views/locacao/atualizar-locacao/atualizar-locacao.component";
import { ListarLocacaoComponent } from "./components/views/locacao/listar-locacao/listar-locacao.component";
import { CadastrarLocacaoComponent } from "./components/views/locacao/cadastrar-locacao/cadastrar-locacao.component";
import { DeletarUsuarioComponent } from "./components/views/usuario/deletar-usuario/deletar-usuario.component";
import { AtualizarUsuarioComponent } from "./components/views/usuario/atualizar-usuario/atualizar-usuario.component";
import { DeletarFilmeComponent } from "./components/views/filme/deletar-filme/deletar-filme.component";
import { AtualizarFilmeComponent } from "./components/views/filme/atualizar-filme/atualizar-filme.component";

const routes: Routes = [
  {
    path: "",
    component: ListarFilmeComponent,
  },
  {
    path: "filme/listar",
    component: ListarFilmeComponent,
  },
  {
    path: "filme/cadastrar",
    component: CadastrarFilmeComponent,
  },
  {
    path: "filme/deletar",
    component: DeletarFilmeComponent,
  },
  {
    path: "filme/atualizar",
    component: AtualizarFilmeComponent,
  },
  {
    path: "usuario/listar",
    component: ListarUsuarioComponent,
  },
  {
    path: "usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "usuario/deletar",
    component: DeletarUsuarioComponent,
  },
  {
    path: "usuario/atualizar",
    component: AtualizarUsuarioComponent,
  },
  {
    path: "locacao/deletar",
    component: DeletarLocacaoComponent,
  },
  {
    path: "locacao/atualizar",
    component: AtualizarLocacaoComponent,
  },
  {
    path: "locacao/listar",
    component: ListarLocacaoComponent,
  },
  {
    path: "locacao/cadastrar",
    component: CadastrarLocacaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
