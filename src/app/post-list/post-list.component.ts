import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    {
      id:1,
      titulo: 'Hatsune Miku',
      data: '31/08/2007',
      conteudo: 'Uma breve descrição sobre a Hatsune Miku',
    },
    {
      id:2,
      titulo: 'Segundo Post',
      data: '20/10/2015',
      conteudo: 'Este é o conteúdo do segundo post',
    },
    {
      id:3,
      titulo: 'Terceiro Post',
      data: '20/10/2015',
      conteudo: 'Este é o conteúdo do terceiro post',
    },
  ]

}
