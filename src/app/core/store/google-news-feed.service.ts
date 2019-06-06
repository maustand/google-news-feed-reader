import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TypeOfFilter } from '../interfaces/filters';
import { ChannelOfFeeds, NewsFeed } from '../interfaces/newsFeed';

@Injectable({
  providedIn: 'root'
})
export class GoogleNewsFeedService {

  private endPointUrl = environment.corsProxy + environment.gnewsEntryPoint + '/rss';
  private queryString = 'hl=en-US&gl=US&ceid=US:en'; // language defined


  constructor(private http: HttpClient, private parserSrv: NgxXml2jsonService) { }


  getNewsFeed(value: string, type: string): Observable<ChannelOfFeeds> {
    const route = (type === TypeOfFilter.COUNTRY) ? '/geo/' : '/topics/';

    return this.http.get(`${this.endPointUrl}${route}${value}?${this.queryString}`, { responseType: 'text' }).pipe(
      map((xml) => this.auxXml2Json(xml)),
      filter((jsonData: { rss: any }) => jsonData.rss),
      map((data: { rss: any }): ChannelOfFeeds => {
        return this.dataMapper(data);
      })

    );

  }

  getTopStories(): Observable<ChannelOfFeeds> {
    return this.http.get(`${this.endPointUrl}?${this.queryString}`, { responseType: 'text' }).pipe(
      map((xml) => this.auxXml2Json(xml)),
      filter((jsonData: { rss: any }) => jsonData.rss),
      map((data: { rss: any }): ChannelOfFeeds => {
        return this.dataMapper(data);
      })

    );
  }


  // Auxiliar functions
  private auxXml2Json(srtXML: string): any {
    const domParser = new DOMParser();
    const xml = domParser.parseFromString(srtXML, 'text/xml');

    return this.parserSrv.xmlToJson(xml) || {};
  }

  private dataMapper(data): ChannelOfFeeds {

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

  }
}
