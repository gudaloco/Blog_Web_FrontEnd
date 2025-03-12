import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto_Blog';
}
