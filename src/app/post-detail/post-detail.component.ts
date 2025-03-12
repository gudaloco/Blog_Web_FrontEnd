import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postId: number;
  post: any;
  posts = [
    { id: 1, titulo: 'Hatsune Miku', data: '31/08/2007', conteudo: 'Hatsune Miku (japonês: 初音ミク) é um software de voicebank para Vocaloid desenvolvido pela Crypton Future Media e sua personagem mascote oficial de antropomorfismo moe, com longas maria-chiquinhas turquesa. A personificação de Miku foi comercializada como uma ídolo virtual e já se apresentou em vários shows em palco como uma projeção em 3D (retroprojeção em uma tela de vidro com revestimento especial).' },
    { id: 2,  titulo: 'mama', data: '05/10/2010', conteudo: 'allllllllllllllll' },
    { id: 3, titulo: 'aeeeeeeeeee', data: '10/10/2002', conteudo: 'wggwgwgwg' },
  ];

  constructor(private route: ActivatedRoute ) {
    this.postId = +this.route.snapshot.params['id'];
    this.post = this.posts.find(post => post.id === this.postId);
  }
}

