AOS.init();
AOS.init({
    disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
    }
});

  // const content = document.getElementById('con');
  // const content_scroll_width = content.scrollWidth;
  // let content_scoll_left = content.scrollLeft;
  // btn_right.addEventListener('click', () => {
  //   content_scoll_left += 100;
  //   if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
  //   content.scrollLeft = content_scoll_left;
  // });

  // btncarousel1 = document.getElementsByClassName('btn-carousel')[0];
  // btncarousel2 = document.getElementsByClassName('btn-carousel')[1];
  // btncarousel2.addEventListener('click', function() {
  //   console.log('oke');
  //   btncarousel2.sdc
    // const content = document.getElementById('nftfirst');
    // const content_scroll_width = content.scrollWidth;
    // let content_scoll_left = content.scrollLeft;
    // console.log(content_scoll_left);
    // content_scoll_left += 100;
    // if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
    //   content.scrollLeft = content_scoll_left;
  // });

  function slide(direction){
    var scroll = document.getElementsByClassName('scroll')[0];
    scrollCompleted = 0;
    var slideVar = setInterval(function(){
    const content = document.getElementById('nftfirst');
    const content_scroll_width = content.scrollWidth;

        if(direction == 'left'){
            scroll.scrollLeft -= content_scroll_width/10;
            scroll.style.transition ="all ease in 1s";
        } else {
            scroll.scrollLeft += content_scroll_width/10;
            scroll.style.transition ="all ease in 1s";
        }
        scrollCompleted += 10;
        if(scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);
}


let toogleImg = document.querySelector('#nav-btn');
toogleImg.addEventListener('click', function() {
    let nav = document.querySelector('img');
    if(nav.classList.contains('active')) {
        console.log('ada');
        nav.src = '/img/Icon/Icon Toogle X.svg';
        nav.classList.remove('active');
        console.log('ok');
    } else {
        console.log('tidak ada');
        nav.src = '/img/Icon/Icon Toogle.svg';
        nav.classList.add('active');
        console.log('ok');
    }
});

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    // var tes = document.querySelectorAll('input[type="checkbox"]:checked');
    // console.log(tes);
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    Swal.fire(
      'Submited',
      'Your request has been sent',
      'success'
    );
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      console.log('ok');
    })
  });
});

// Design Prosess Script 


    if ($(window).width() >= 576){
      const spaceHolder = document.querySelector('.space-holder');
      const horizontal = document.querySelector('.horizontal');
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
      
      function calcDynamicHeight(ref) {
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const objectWidth = ref.scrollWidth;
        return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
      }
      
      window.addEventListener('scroll', () => {
          const sticky = document.querySelector('.sticky');
          horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
      });
      
      window.addEventListener('resize', () => {
          spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
      });
    } else {
        
    }

    // Grid Col & Row

    let gridcol = document.getElementById('gridcol');
    let gridrow = document.getElementById('gridrow');
    let itemgrid = document.getElementsByClassName('item-grid');

    gridcol.addEventListener('click', function() {
      gridcol.classList.add('active');
      gridrow.classList.remove('active');
      Array.from(itemgrid).forEach(function(element) {  
        element.classList.add('col-md-6');
        console.log('ok');
        });
    })

    gridrow.addEventListener('click', function() {
      gridrow.classList.add('active');
      gridcol.classList.remove('active');
      Array.from(itemgrid).forEach(function(element) {  
        element.classList.remove('col-md-6');
        console.log('ok');
        });
    });
    // col-md-6


    $("select option:selected").css('backgroundColor', '#FFFFFF');