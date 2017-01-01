/**
 * Created by david492000 on 12/31/2016.
 */
import {Component} from '@angular/core';
@Component({
  selector: 'my-app',
  template:`
<h2>My heroes</h2>
<nav>
<a routerLink="/dashboard">Dashboard</a>
<a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<!--<my-heroes></my-heroes>-->
`
})

export class AppComponent{
  title = 'Tour of Heroes';
}
