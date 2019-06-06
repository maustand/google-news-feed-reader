import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { FiltersAutoComplete, ValuesForFilters } from '../core/interfaces/filters';
import { ChannelOfFeeds } from '../core/interfaces/newsFeed';
import { GoogleNewsFeedService } from '../core/store/google-news-feed.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit, OnDestroy {

  private cache: { [key: string]: ChannelOfFeeds } = {};

  filtersCtrl = new FormControl();

  channel: ChannelOfFeeds;
  filtersAvailable: FiltersAutoComplete[] = ValuesForFilters;
  filterOptionsObserv$: Observable<FiltersAutoComplete[]>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private gNewsFeedSrv: GoogleNewsFeedService) { }

  ngOnInit() {
    this.gNewsFeedSrv.getTopStories().subscribe((response: ChannelOfFeeds) => {
      this.channel = response;
    });

    this.filterOptionsObserv$ = this.filtersCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.filtersAvailable.slice())
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectedFilter(event: MatAutocompleteSelectedEvent) {

    const selected = event.option.value;

    if (this.cache[selected.label]) { // avoids to request double ( cache )
      this.channel = this.cache[selected.label];
      return;
    }

    this.gNewsFeedSrv.getNewsFeed(selected.value, selected.type).pipe(
      takeUntil(this.destroy$)
    ).subscribe((response: ChannelOfFeeds) => {
      this.cache[selected.label] = response;
      this.channel = response;
    });

  }

  displayFn(filterOption?: FiltersAutoComplete): string | undefined {
    return filterOption ? filterOption.label : undefined;
  }
  private _filter(label: string): FiltersAutoComplete[] {
    const filterValue = label.toLowerCase();
    return this.filtersAvailable.filter(option => option.label.toLowerCase().indexOf(filterValue) === 0);
  }
}
