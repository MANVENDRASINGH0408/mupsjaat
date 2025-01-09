function download(url)
{
    console.log("file started downloding....");
    setTimeout(() => {
        let img=url.split('/').pop();
            download(img);
    },3000);
}
function compress(img,comp)
{
    console.log("file start compressing....")
    setTimeout(() => {
        let cmp=img.split(',')+".zip"
        comp(cmp);
    }, 2000);
}
function upload(cmp,upl)
{
    console.log(file start uploading....);
    setTimeout(() => {
        let up="file uploded to server"+cmp;
        upl(up);
    }, 1000);
}
download("https://www.fackbook.com/img.jpg",function down(img)
{
    console.log("file downloded successfully.."+img);
}



)