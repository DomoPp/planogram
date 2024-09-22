import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {

  backgroundImage: string | ArrayBuffer | null = null;
  texts: { content: string, top: number, left: number, width: number, height: number }[] = [];
  savedData: {nameImg:string, backgroundImage: string | ArrayBuffer | null, texts: any[] }[] = [];

  ngOnInit() {
    this.loadSavedData();
  }

  loadData(i:number) {
    const data : string|null = localStorage.getItem('dragDropData');
    if (data) {
      const parsedData = JSON.parse(data);
      this.backgroundImage = parsedData[i].backgroundImage;
      this.texts = parsedData[i].texts;
    }
  }
  loadSavedData() {
    const data = JSON.parse(localStorage.getItem('dragDropData') || '[]');
    this.savedData = data;
  }
}
