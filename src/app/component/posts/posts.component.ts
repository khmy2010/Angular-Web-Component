import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, SimpleChanges } from '@angular/core';
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
  @Input() chartdata: string = '';

  validatedChartData: Array<number> = [];
  
  posts$: Observable<any>;

  constructor(private ajaxService: AjaxService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.posts$ = this.ajaxService.findPosts();
    this.cdRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartdata) {
      try {
        const parsed = JSON.parse(this.chartdata);

        if (Array.isArray(parsed)) {
          this.validatedChartData = [...parsed];
        }
      }
      catch(_) {
        console.error('failed in parsing.');
      }
    }
    
    this.cdRef.markForCheck();
  }

}
