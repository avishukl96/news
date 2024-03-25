import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Royal Society of Chemistry",
      },
      author:
        "Mohd. Abubakar Sadique, Shalu Yadav, Raju Khan, Avanish K. Srivastava",
      title:
        "Engineered two-dimensional nanomaterials based diagnostics integrated with internet of medical things (IoMT) for COVID-19",
      description:
        "Chem. Soc. Rev., 2024, Advance ArticleDOI: 10.1039/D3CS00719G, Review ArticleMohd. Abubakar Sadique, Shalu Yadav, Raju Khan, Avanish K. SrivastavaEngineered 2D nanomaterials-based smartphone-assisted detection approaches integrated with IoMT, focusing on reli…",
      url: "https://pubs.rsc.org/en/content/articlelanding/2024/cs/d3cs00719g",
      urlToImage: "https://pubs.rsc.org/en/Content/Image/GA/D3CS00719G",
      publishedAt: "2024-03-04T00:00:00Z",
      content:
        "More than four years have passed since an inimitable coronavirus disease (COVID-19) pandemic hit the globe in 2019 after an uncontrolled transmission of the severe acute respiratory syndrome (SARS-Co… [+1807 chars]",
    },

    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Rajeev Dikshit",
      title:
        "Mukhtar Ansari gets life term in case of managing arms license on forged documents",
      description:
        "Jailed mafia don Mukhtar Ansari has been sentenced to life imprisonment by the court of special judge (MP-MLA) Avanish Gautam. Ansari was found guilty in a 1990 case involving the illegal acquisition of a double barrel gun license through cheating, forgery of…",
      url: "https://timesofindia.indiatimes.com/india/mukhtar-ansari-gets-life-term-in-case-of-managing-arms-license-on-forged-documents/articleshow/108464744.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-108465045,width-1070,height-580,imgsize-1981690,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-03-13T10:55:43Z",
      content:
        "10 benefits of drinking lemon juice, turmeric, black pepper shot everyday",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Online",
      title:
        "MS Dhoni reveals his leadership style ahead of CSK's IPL 2024 campaign",
      description:
        "Chennai Super Kings (CSK) are scheduled to kick off the 2024 Indian Premier League (IPL) against Royal Challengers Bangalore on March 22 in Chennai. Ahead of this match, CSK captain Mahendra Singh Dhoni discussed the excitement of having a diverse team, highl…",
      url: "https://economictimes.indiatimes.com/news/sports/ms-dhoni-reveals-his-leadership-style-ahead-of-csks-ipl-2024-campaign/articleshow/108254227.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-108254481,width-1200,height-630,imgsize-39892,overlay-economictimes/photo.jpg",
      publishedAt: "2024-03-06T04:37:03Z",
      content:
        "Chennai Super Kings (CSK) will face off against Royal Challengers Bangalore in the inaugural match of the 2024 Indian Premier League (IPL) on March 22 in Chennai. Ahead of this highly anticipated enc… [+2277 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Economic Times",
      title:
        "CSK vs RCB Live Score, IPL 2024: It is time for Thala's CSK vs King's RCB once again, who'll win this royal battle?",
      description:
        "CSK vs RCB Live Score, IPL 2024, Chennai Super Kings, Royal Challengers Bangalore: If it isn’t time for the ultimate celebration of cricket! The day has finally come when the 17th edition of the Indian Premier League (IPL) commences and with the two most love…",
      url: "https://economictimes.indiatimes.com/news/sports/csk-vs-rcb-live-score-updates-t20-ipl-2024-opening-ceremony-cricket-scorecard-chennai-super-kings-vs-royal-challengers-bangalore-indian-premier-league-live-stream-tv-telecast-online-22-march-weather-forecast-updates/liveblog/108704971.cms",
      urlToImage:
        "https://economictimes.indiatimes.com/thumb/msid-108704971,width-600,resizemode-4,imglength-103704/news/sports/csk-vs-rcb-live-score-updates-t20-ipl-2024-opening-ceremony-cricket-scorecard-chennai-super-kings-vs-royal-challengers-bangalore-indian-premier-league-live-stream-tv-telecast-online-22-march-weather-forecast-updates.jpg",
      publishedAt: "2024-03-22T09:18:37Z",
      content:
        "CSK vs RCB Live Score, IPL 2024, Chennai Super Kings, Royal Challengers Bangalore: If it isn’t time for the ultimate celebration of cricket! The day has finally come when the 17th edition of the Indi… [+3180 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Online",
      title:
        "IPL 2024: When MS Dhoni's close friend had correctly predicted a change in CSK captaincy",
      description:
        "Ruturaj Gaikwad takes over from MS Dhoni as Chennai Super Kings captain for IPL 2024, with RCB led by Faf du Plessis. New recruits like Rachin Ravindra and Daryl Mitchell add depth to the teams.",
      url: "https://economictimes.indiatimes.com/news/sports/ipl-2024-when-ms-dhonis-close-friend-had-guessed-a-change-of-csk-captaincy/articleshow/108678145.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-108679056,width-1200,height-630,imgsize-111918,overlay-economictimes/photo.jpg",
      publishedAt: "2024-03-21T10:58:48Z",
      content:
        "Just a day ahead of the start of Chennai Super Kings' IPL 2024 campaign, MS Dhoni stepped down from the captaincy of the side. Ruturaj Gaikwad will take over as skipper of the Chennai side which has … [+3644 chars]",
    },
    {
      source: {
        id: null,
        name: "Thehillstimes.in",
      },
      author: "The Hills Times",
      title: "With Ruturaj Gaikwad At Helm, CSK Eye Strong Start Against RCB",
      description:
        "Chennai, Mar 21 (PTI) The high-stakes match between cross-city rivals Chennai Super Kings and Royal Challengers Bengaluru here on Friday will not only usher in IPL 2024 but also a new dawn for the defending champions with iconic MS Dhoni handing over the capt…",
      url: "https://thehillstimes.in/sports/with-ruturaj-gaikwad-at-helm-csk-eye-strong-start-against-rcb",
      urlToImage:
        "https://thehillstimes.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-10.17.14-PM.jpeg",
      publishedAt: "2024-03-21T22:10:10Z",
      content:
        "Chennai, Mar 21 (PTI) The high-stakes match between cross-city rivals Chennai Super Kings and Royal Challengers Bengaluru here on Friday will not only usher in IPL 2024 but also a new dawn for the de… [+4408 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ANI",
      title:
        "IPL 2024: All eyes on CSK vs RCB opener as defending champs gear up for more 'Yellove' under new captain",
      description:
        "First up against CSK will be a reinvigorated RCB, looking to change the narrative after its women's team broke the franchise's title jinx by winning the Women's Premier League last week. Under recently appointed coach Andy Flower, who has an impressive track …",
      url: "https://economictimes.indiatimes.com/news/sports/ipl-2024-all-eyes-on-csk-vs-rcb-opener-as-defending-champs-gear-up-for-more-yellove-under-new-captain/articleshow/108691863.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-108691873,width-1200,height-630,imgsize-46762,overlay-economictimes/photo.jpg",
      publishedAt: "2024-03-22T02:06:08Z",
      content:
        "Chennai: It is again time of the year when Chennai will drape itself in yellow, holding its breath for a glimpse of Chennai Super Kings former captain MS Dhoni, before falling into a state of euphori… [+3715 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-4">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            //console.log(this.element);
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  fullTitle={element.title}
                  title={element.title.slice(0, 35)}
                  description={element.description.slice(0, 50)}
                  imageURL={element.urlToImage}
                  newURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
