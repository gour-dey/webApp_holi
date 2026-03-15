(function(){
  // active link based on current path
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  // contact form demo
  const form = document.querySelector('form[data-contact]');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const msg = form.querySelector('[name="message"]').value.trim();
      const target = document.querySelector('#formResult');
      if(!name || !email || !msg){
        target.textContent = "Please fill all fields.";
        return;
      }
      // Demo only (no backend). Create mailto draft.
      const subject = encodeURIComponent("Organic Holi Colors - Enquiry");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;
      target.textContent = "Opening your email app…";
    });
  }
})();
// ---- me added , banner moving for index

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

function nextSlide(){

index++;

if(index >= images.length){
index = 0;
}

slides.style.transform = `translateX(-${index * 100}%)`;

}

setInterval(nextSlide, 4000);