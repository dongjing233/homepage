    for(let i = 0; i< 3 ;i ++){
      let video = document.createElement('video');
      let center = document.getElementsByClassName('video-center');
      video.setAttribute('src', record.fields[`video${i+1}`][0].url);
      video.controls = true;
      video.style.width ='300px';
      video.style.height ='500px';
      center[i].appendChild(video);
    }