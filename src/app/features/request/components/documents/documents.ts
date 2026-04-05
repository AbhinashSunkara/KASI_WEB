import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: false,
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents implements OnInit {
  @Input() initialFiles: File[] = [];
  @Output() filesSelected = new EventEmitter<File[]>();
  files: File[] = [];

  ngOnInit() {
    this.files = [...this.initialFiles];
  }

  onFileSelect(event: any) {
    const selectedFiles = event.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.push(selectedFiles[i]);
    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

   submit() {
    if (this.files.length === 0) {
      alert('Please upload at least one document');
      return;
    }

    this.filesSelected.emit(this.files);
  }

}
