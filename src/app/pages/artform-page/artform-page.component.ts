import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-artform-page',
  templateUrl: './artform-page.component.html',
  styleUrls: ['./artform-page.component.css']
})
export class ArtformPageComponent {
 
  
constructor(private router:Router,private hero:HeroService){}
artform=this.hero.giveData();
gotoHere(id:any)
{
localStorage.setItem('id',id);
this.router.navigate(['/single']);
}
}

