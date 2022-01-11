import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from './services/load.service';

@Pipe({
  name: 'liveEarthViewPipe'
})
export class LiveEarthViewPipePipe implements PipeTransform {

  transform(value: string, n: Array<Dict<any>>) {

    var views: Array<{
      views: Dict<any>,
      timestamp: Date,
    }> = []
    n.forEach(p => {
      // p.views = p.views.sort(function(a:any, b:any){
      //   if(a.timestamp < b.timestamp) { return 1; }
      //   if(a.timestamp > b.timestamp) { return -1; }
      //   return 0;
      // })
      if (views?.find(k => p.views.find((h: any) => h.coords.LONGITUDE == k.views.coords.LONGITUDE && h.coords.LATITUDE == k.views.coords.LATITUDE))){
        let i = views?.findIndex(k => p.views.find((h: any) => h.coords.LONGITUDE == k.views.coords.LONGITUDE && h.coords.LATITUDE == k.views.coords.LATITUDE))
        if (i >= 0){
          views[i].views.num += p.views.length
        }
      }
      else{
        views?.push({ 
          views: {
            coords: p.views[0].coords,
            num: p.views.length
          }, 
          timestamp: p.timestamp});
      }
    })    

    var mystr = ''

    

    views.forEach(i => {
      mystr += "var mymarker = this.addMarker( {location: { lat :" + i.views.coords.LATITUDE + ", lng : " + i.views.coords.LONGITUDE + " },mesh: ['Pin3'],color: c,hotspot: true,transparent:true,opacity:0.5,} );mymarker.animate( 'scale', 1.25, { loop: true, oscillate: true, duration: 2000, easing: 'in-out-quad' } );mymarker.addEventListener( 'click', function() { this.earth.goTo( { lat :" + i.views.coords.LATITUDE + ", lng : " + i.views.coords.LONGITUDE + "}, { duration: 300 } ); });"
    })

    

    return value.replace('yyyy;', mystr != '' ? mystr : ";")
  }

}
