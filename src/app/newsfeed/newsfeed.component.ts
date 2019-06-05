import { Component, OnInit } from '@angular/core';
import { GoogleNewsFeedService } from '../core/store/google-news-feed.service';
import { ChannelOfFeeds } from '../core/interfaces/newsFeed';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {


  categories: Array<{ title: string, value: string }> = [];
  countries: Array<{ name: string, code: string }> = [];
  channel: ChannelOfFeeds;

  constructor(private gNewsFeedSrv: GoogleNewsFeedService) { }

  ngOnInit() {

    this.gNewsFeedSrv.getTopStories().subscribe((response: ChannelOfFeeds) => {
      console.log(response)
      this.channel = response;
    });
  }

}
