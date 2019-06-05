export interface MediaOfNewsFeed {
    height: string;
    medium: string;
    url: string;
    width: string;
}

export interface NewsFeed {
    link: string;
    content: string;
    date: string;
    source: string;
    title: string;
    media?: MediaOfNewsFeed;
}


export interface ChannelOfFeeds {
    title: string;
    newsFeeds: NewsFeed[];
}
