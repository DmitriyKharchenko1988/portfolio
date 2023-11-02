$(window).on('load', function (){
    $('#header').vide('assets/video/video', {
        bgColor: '#B59466'
    });
})

function fallback(video)
{
    let img = video.querySelector('img');
    if (img)
        video.parentNode.replaceChild(img, video);
}