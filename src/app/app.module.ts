import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ListarFilmeComponent } from "./components/views/filme/listar-filme/listar-filme.component";
import { CadastrarFilmeComponent } from "./components/views/filme/cadastrar-filme/cadastrar-filme.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CadastrarUsuarioComponent } from "./components/views/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { ListarUsuarioComponent } from "./components/views/usuario/listar-usuario/listar-usuario.component";
import { ListarLocacaoComponent } from "./components/views/locacao/listar-locacao/listar-locacao.component";
import { CadastrarLocacaoComponent } from "./components/views/locacao/cadastrar-locacao/cadastrar-locacao.component";
import { DeletarLocacaoComponent } from "./components/views/locacao/deletar-locacao/deletar.component";
import { AtualizarLocacaoComponent } from "./components/views/locacao/atualizar-locacao/atualizar-locacao.component";
import { DeletarUsuarioComponent } from "./components/views/usuario/deletar-usuario/deletar-usuario.component";
import { AtualizarUsuarioComponent } from "./components/views/usuario/atualizar-usuario/atualizar-usuario.component";
import { DeletarFilmeComponent } from "./components/views/filme/deletar-filme/deletar-filme.component";
import { AtualizarFilmeComponent } from "./components/views/filme/atualizar-filme/atualizar-filme.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ListarFilmeComponent,
    CadastrarFilmeComponent,
    CadastrarUsuarioComponent,
    AtualizarLocacaoComponent,
    DeletarLocacaoComponent,
    ListarUsuarioComponent,
    ListarLocacaoComponent,
    CadastrarLocacaoComponent,
    DeletarUsuarioComponent,
    AtualizarUsuarioComponent,
    DeletarFilmeComponent,
    AtualizarFilmeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
