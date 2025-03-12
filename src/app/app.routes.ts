import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponentComponent } from './home/home-component.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponentComponent},
    {path:'posts', component: PostListComponent},
    {path:'posts/:id', component: PostDetailComponent},
    {path:'about', component: AboutComponent,},
    {path: '**', component: NotFoundComponent},
];
