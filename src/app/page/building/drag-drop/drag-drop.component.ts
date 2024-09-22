import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  backgroundImage:any| string | ArrayBuffer | null = null;
  texts: { content: string, top: number, left: number, width: number, height: number }[] = [];
  nameImg : string = 'Add Name';
  private selectedText: any;
  private resizingText: any;
  private offsetX: number = 0;
  private offsetY: number = 0;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.backgroundImage = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  addText() {
    this.texts.push({ content: '', top: 50, left: 50, width: 200, height: 30 });
  }

  startDrag(event: MouseEvent, text: any) {
    this.selectedText = text;
    this.offsetX = event.clientX - text.left;
    this.offsetY = event.clientY - text.top;
    document.addEventListener('mousemove', this.dragMove);
    document.addEventListener('mouseup', this.endDrag);
  }

  dragMove = (event: MouseEvent) => {
    if (this.selectedText) {
      this.selectedText.left = event.clientX - this.offsetX;
      this.selectedText.top = event.clientY - this.offsetY;
    }
  };

  endDrag = () => {
    this.selectedText = null;
    document.removeEventListener('mousemove', this.dragMove);
    document.removeEventListener('mouseup', this.endDrag);
  };

  startResize(event: MouseEvent, text: any) {
    this.resizingText = text;
    this.offsetX = event.clientX;
    this.offsetY = event.clientY;
    event.stopPropagation();
    document.addEventListener('mousemove', this.resizeMove);
    document.addEventListener('mouseup', this.endResize);
  }

  resizeMove = (event: MouseEvent) => {
    if (this.resizingText) {
      this.resizingText.width += event.clientX - this.offsetX;
      this.resizingText.height += event.clientY - this.offsetY;
      this.offsetX = event.clientX;
      this.offsetY = event.clientY;
    }
  };

  endResize = () => {
    this.resizingText = null;
    document.removeEventListener('mousemove', this.resizeMove);
    document.removeEventListener('mouseup', this.endResize);
  };

  saveData() {
    const data = JSON.parse(localStorage.getItem('dragDropData') || '[]');
    data.push({
      nameImg:this.nameImg,
      backgroundImage: this.backgroundImage,
      texts: this.texts
    });
    localStorage.setItem('dragDropData', JSON.stringify(data));
  }

  loadData() {
    const data = JSON.parse(localStorage.getItem('dragDropData') || '[]');
    const lastIndex = data.length - 1;
    if (lastIndex >= 0) {
      const lastData = data[lastIndex];
      this.backgroundImage = lastData.backgroundImage;
      this.texts = lastData.texts;
    }
  }
}
