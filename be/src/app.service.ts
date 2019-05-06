import { HttpService, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import * as md5 from 'md5';
import { BASE_POSTS_URL } from './constants';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import FIREBASE_CONFIG from './firebase.config';

@Injectable()
export class AppService {
  db: firebase.firestore.Firestore;

  constructor(private httpService: HttpService,) {
    firebase.initializeApp(FIREBASE_CONFIG);
    this.db = firebase.firestore();
  }

  /**
   * Extract data from GIS website until they fix api dataset to be updated.
   */
  async extractPostsFromHtml() {
    const resp = await this.httpService.get(BASE_POSTS_URL)
      .toPromise();
    const c = cheerio.load(resp.data);
    const pagesCount = parseInt(c('.pagination .page-numbers').not('.next').last().html());
    this.getPagePosts(1);
    for (let page = 2; page <= pagesCount; page++) {
      await this.getPagePosts(page);
    }
  }

  /**
   * Put extracted data into firebase database.
   * @param pageNumber
   */
  async getPagePosts(pageNumber: number = 1) {
    const pageUrl = pageNumber ? `${BASE_POSTS_URL}page/${pageNumber}/` : BASE_POSTS_URL;
    const pageHtml = await this.httpService.get(pageUrl)
      .toPromise();
    const c = cheerio.load(pageHtml.data);
    const links = c('.category-list__item').toArray();
    links.forEach(linkContainer => {
      const link = c(linkContainer).find('.layer-link').attr('href');
      const title = c(linkContainer).find('.category-list__title').text();
      const image = c(linkContainer).find('.category-list__image img').attr('src');

      this.db.collection('posts').doc(md5(link)).set({
        url: link,
        title: title,
        image: image ? image : null,
      });
    });
  }
}
