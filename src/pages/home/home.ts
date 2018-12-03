import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private document: DocumentViewer) {

  }

  ionViewDidLoad() {
    if(this.platform.is('cordova')) {
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
  
      this.document.viewDocument('assets/test.pdf', 'application/pdf', options)
    }
    
  }

}
