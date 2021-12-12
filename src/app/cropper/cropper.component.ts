import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  ratio?: number;
  width = 200
  height = 200
  innerHeight(){
    return window.innerHeight * 0.9
  }

  constructor(
    private activeModal: NgbActiveModal,
  ) {
   }

  ngOnInit(): void {
    console.log(window.innerHeight)
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
  // show cropper
}

compressImage(src: string) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const elem = document.createElement('canvas');

      if (this.ratio){
        elem.width = this.width;
        elem.height = this.height;
        const ctx = elem.getContext('2d');
        ctx?.drawImage(img, 0, 0, this.width, this.height);
        const data = ctx?.canvas.toDataURL("image/jpg")
        res(data);
      }
      else{
        res(src);
      }
    }
    img.onerror = error => rej(error);
  })
}

async useImage(){
  let res = await this.compressImage(this.croppedImage)
  this.activeModal.dismiss(res)
}

cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}



}
