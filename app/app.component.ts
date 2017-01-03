/**
 * Created by david492000 on 12/31/2016.
 */
import {Component} from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template:`
<h2>My heroes</h2>
<nav>
<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>
<!--<my-heroes></my-heroes>-->
`,
  styleUrls: ['app.component.css']
})

export class AppComponent{
  title = 'Tour of Heroes';
}
