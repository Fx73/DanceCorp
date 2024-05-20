import { Firestore, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, startAfter, startAt, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {
  db: Firestore

  constructor() {
    this.db = getFirestore()

  }


}
