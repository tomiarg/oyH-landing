
document.addEventListener("DOMContentLoaded",function(){
    iniciarApp();
});

const iniciarApp = ()=>{
    animacion();
    animacionContacto();
}



const animacion =()=>{
    const servicios = document.querySelector('#imgAnimate');
    const boxServiciosPrim = document.querySelector('.boxPrim')
    const boxSecond = document.querySelector(".boxSecond")
    const boxThrd = document.querySelector('.boxThrd')
    const boxFour = document.querySelector('.boxFour')
    window.addEventListener('scroll', function(){
        if(servicios.getBoundingClientRect().top < 0){
            boxServiciosPrim.classList.add("animate__zoomIn");
            boxSecond.classList.add("animate__zoomIn");
            boxThrd.classList.add("animate__zoomIn");
            boxFour.classList.add("animate__zoomIn");
        }else{
            boxServiciosPrim.classList.remove("animate__zoomIn")
            boxSecond.classList.remove("animate__zoomIn")
            boxThrd.classList.remove("animate__zoomIn")
            boxFour.classList.remove("animate__zoomIn")             
        }        
    })    
}
const animacionContacto =()=>{
    window.addEventListener('scroll', ()=>{
        const hacemos = document.querySelector("#videoAnimate")
        const imagenContacto = document.querySelector(".imagen-contactaNos")
        const infoContacto = document.querySelector(".info-contactaNos")
       if(hacemos.getBoundingClientRect().top<0){
        imagenContacto.classList.add("animate__rotateInDownLeft") 
        infoContacto.classList.add("animate__rotateInUpRight")

       }else{
        imagenContacto.classList.remove("animate__rotateInDownLeft") 
        infoContacto.classList.remove("animate__rotateInUpRight")

       }        

    })

}

