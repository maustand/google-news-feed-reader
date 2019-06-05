import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { NewsFeed, ChannelOfFeeds } from '../interfaces/newsFeed';

import { NgxXml2jsonService } from 'ngx-xml2json';



@Injectable({
  providedIn: 'root'
})
export class GoogleNewsFeedService {

  private endPointUrl = environment.corsProxy + environment.gnewsEntryPoint;

  constructor(private http: HttpClient, private parserSrv: NgxXml2jsonService) { }


  private auxXml2Json(srtXML: string): any {
    const domParser = new DOMParser();
    const xml = domParser.parseFromString(srtXML, 'text/xml');

    return this.parserSrv.xmlToJson(xml) || {};
  }

  private auxMapper(data: any) {

  }

  getTopStories(): Observable<ChannelOfFeeds> {
    return this.http.get(`${this.endPointUrl}/rss?hl=en-US&gl=US&ceid=US:en`, { responseType: 'text' }).pipe(
      map((xml) => this.auxXml2Json(xml)),
      filter((jsonData: { rss: any }) => jsonData.rss),
      map((data: { rss: any }): ChannelOfFeeds => {

        const channelData: ChannelOfFeeds = {
          title: data.rss.channel.title,
          newsFeeds: data.rss.channel.item.map((item: any): NewsFeed => {

            const feed: NewsFeed = {
              link: item.link,
              content: item.description,
              date: item.pubDate,
              source: item.source,
              title: item.title
            };

            if (item['media:content']) {
              feed.media = item['media:content']['@attributes'];
            }

            return feed;
          })
        };

        return channelData;

      })

    );
  }
}
