import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activedRoute.params.subscribe((params) => {
      this.heroe = this.heroesService.getHeroe(params["id"]);
    });
  }

  ngOnInit(): void {}
}
