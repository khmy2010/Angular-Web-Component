import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { AjaxService } from 'src/app/service/ajax.service';
import { Observable } from 'rxjs';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostsComponent implements OnInit {
  @Input() chartData: Array<SeriesOptionsType> = [];
  
  posts$: Observable<any>;

  constructor(private ajaxService: AjaxService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.posts$ = this.ajaxService.findPosts();
    this.cdRef.markForCheck();
  }

}
