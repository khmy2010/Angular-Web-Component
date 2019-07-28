import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AjaxService } from 'src/app/service/ajax.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private ajaxService: AjaxService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.posts$ = this.ajaxService.findPosts();
    this.cdRef.markForCheck();
  }

}
