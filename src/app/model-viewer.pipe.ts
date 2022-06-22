import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelViewer',
})
export class ModelViewerPipe implements PipeTransform {
  transform(value: string): string {
    return `
    
    <!doctype html>
    <html lang='en'>
    <head>
    <title>&lt;model-viewer&gt; template</title>
    <meta charset='utf-8'>
    <meta name='description' content='&lt;model-viewer&gt; template'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer>
    </script>
    </head>
    <body>
    <model-viewer camera-controls src=${value}>
    </model-viewer>
    <script type='module'>

    function screenshot(){
      const viewer = document.querySelector('model-viewer');

      const img = viewer.toDataURL("image/jpeg")

      return img
    }
    
    const onProgress = (event) => {

    };

    document.querySelector('model-viewer').addEventListener('progress', onProgress);
    
    </script>
    <script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'>
    
    </script>
    
    <style>
    
    :not(:defined) > * {
      display: none;
    }
    body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
    }
    model-viewer {
      width: 100%;
      height: 100%;
      background-color: #baf7fd;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .progress-bar {
      display: block;
      width: 33%;
      height: 10%;
      max-height: 2%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 25px;
      box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;
      border: 1px solid #baf7fd;
    }
    .progress-bar.hide {
      visibility: hidden;
      transition: visibility 0.3s;
    }
    .update-bar {
      background-color: #baf7fd;
      width: 0%;
      height: 100%;
      border-radius: 25px;
      float: left;
      transition: width 0.3s;
    }
    #ar-button {
      background-image: url(ar_icon.png);
      background-repeat: no-repeat;
      background-size: 20px 20px;
      background-position: 12px 50%;
      background-color: #baf7fd;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      bottom: 132px;
      padding: 0px 16px 0px 40px;
      font-family: Roboto Regular, Helvetica Neue, sans-serif;
      font-size: 14px;
      color:#baf7fd;
      height: 36px;line-height: 36px;border-radius: 18px;
      border: 1px solid #baf7fd;
    }
    #ar-button:active {
      background-color: #baf7fd;
    }
    #ar-button:focus {
      outline: none;
    }
    #ar-button:focus-visible {
      outline: 1px solid #baf7fd;
    }
    @keyframes circle {
      from { 
        transform: translateX(-50%) 
        rotate(0deg) 
        translateX(50px) 
        rotate(0deg); 
      }
      to   { 
        transform: translateX(-50%) 
        rotate(360deg) 
        translateX(50px) 
        rotate(-360deg); 
      }
    }
    
    @keyframes elongate {
      from { 
        transform: translateX(100px); 
      }
      to   { 
        transform: translateX(-100px); 
      }
    }
    
    model-viewer > #ar-prompt {
      position: absolute;
      left: 50%;
      bottom: 175px;
      animation: elongate 2s infinite ease-in-out alternate;
      display: none;
    }
    model-viewer[ar-status='session-started'] > #ar-prompt {
      display: block;
    }
    model-viewer > #ar-prompt > img {
      animation: circle 4s linear infinite;
    }

    </style>
    </body>
    </html>`;
  }
}
