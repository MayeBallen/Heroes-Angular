import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./compnents/home/home.component";
import { HeroesComponent } from "./compnents/heroes/heroes.component";
import { AboutComponent } from "./compnents/about/about.component";
import { HeroeComponent } from "./compnents/heroe/heroe.component";
import { BuscadorComponent } from "./compnents/buscador/buscador.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "about", component: AboutComponent },
  { path: "buscar/:termino", component: BuscadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
