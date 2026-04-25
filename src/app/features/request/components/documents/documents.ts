import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentApiService } from '../../../services/document-api.service';

@Component({
  selector: 'app-documents',
  standalone: false,
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents implements OnInit {

  @Output() filesSelected = new EventEmitter<any[]>();

  uploadedFiles: any[] = [];
  loading = false;

  constructor(private documentApi: DocumentApiService) {}

  ngOnInit() {}

  async onFileSelect(event: any) {
    const selectedFiles = event.target.files;

    this.loading = true;

    for (let i = 0; i < selectedFiles.length; i++) {
      const res = await this.documentApi.upload(selectedFiles[i]);

      this.uploadedFiles.push({
        fileName: res.fileName,
        fileUrl: res.fileUrl,
        fileType: res.fileType
      });
    }

    this.loading = false;
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }

  submit() {
    if (this.uploadedFiles.length === 0) {
      alert('Please upload at least one document');
      return;
    }

    this.filesSelected.emit(this.uploadedFiles);
  }
}