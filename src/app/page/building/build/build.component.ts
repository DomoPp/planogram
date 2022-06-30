import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  public valueWidth = 200
  public valueHeight = 200
  public bgc = '#e66465';
  public box: Array<Box> = [];
  public layer: Array<number> = [0, 1, 2, 3, 4, 5]
  public boxId: number = 0;
  public toolShort = false;
  public toolRemove = true;
  public pageWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 20;
  public pageHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 80;
  menuTopLeftPosition = {x: 0, y: 0}

  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger: MatMenuTrigger | any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addBox(type: string) {
    if (type == 'New') {
      this.box.push({
        fontColor: '#000000',
        fontSize: '16',
        text: 'Add Text',
        radius: 0,
        valueHeight: 60, valueWidth: 60,
        id: this.box.length,
        x: 10,
        y: 10,
        color: '#FF0000',
        layer: 0
      });
    } else if (type == 'Cope') {
      const a = this.box.filter(e => e.id == this.boxId)[0]
      this.box.push({
        fontColor: a.fontColor,
        fontSize: a.fontSize,
        text: a.text,
        radius: a.radius,
        valueHeight: a.valueHeight,
        valueWidth: a.valueWidth,
        id: this.box.length,
        x: a.x,
        y: a.y,
        color: a.color,
        layer: a.layer,
      })
    }

  }


  change(val: any, type: string) {
    switch (type) {
      case 'radius':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: val.value,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'valueHeight':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: val.value,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'valueWidth':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: val.value,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'color':
        console.log(val.target.value)
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: val.target.value,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'x':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: val.value,
          y: this.box[this.boxId].y
        };
        break;
      case 'y':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: val.value
        };
        break;
      case 'text':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: val.target.value,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'fontSize':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: this.box[this.boxId].layer,
          fontSize: val.target.value,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'layer':
        this.box[this.boxId] = {
          fontColor: this.box[this.boxId].fontColor,
          layer: val,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
      case 'fontColor':
        this.box[this.boxId] = {
          fontColor: val.target.value,
          layer: this.box[this.boxId].layer,
          fontSize: this.box[this.boxId].fontSize,
          text: this.box[this.boxId].text,
          radius: this.box[this.boxId].radius,
          valueHeight: this.box[this.boxId].valueHeight,
          valueWidth: this.box[this.boxId].valueWidth,
          color: this.box[this.boxId].color,
          id: this.boxId,
          x: this.box[this.boxId].x,
          y: this.box[this.boxId].y
        };
        break;
    }
  }


  clickBox(val: any) {
    this.boxId = val.id;
    console.log(document.getElementById(`box-${val.id}`))
  }

  onRightClick(event: MouseEvent, item: any) {
    event.preventDefault();
    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;
    this.matMenuTrigger.menuData = {item: item}
    this.matMenuTrigger.openMenu();
  }

  removeBox(id:number) {
    this.box = this.box.filter(e => e.id !== id)
  }
}

export interface Box {
  id: number;
  x: number;
  y: number;
  color: string;
  valueWidth: number;
  valueHeight: number;
  radius: number;
  text: string;
  fontSize: string;
  layer: number;
  fontColor: string;
}
