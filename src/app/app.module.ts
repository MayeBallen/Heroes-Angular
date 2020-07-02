import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//rutas
import { AppRoutingModule } from "./app-routing.module";

//servicios
import { HeroesService } from "./servicios/heroes.service";

//componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./compnents/navbar/navbar.component";
import { HomeComponent } from "./compnents/home/home.component";
import { HeroesComponent } from "./compnents/heroes/heroes.component";
import { AboutComponent } from "./compnents/about/about.component";
import { HeroeComponent } from './compnents/heroe/heroe.component';
import { BuscadorComponent } from './compnents/buscador/buscador.component';
import { HeroeTarjetaComponent } from './compnents/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
