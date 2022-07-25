(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const modal = document.querySelector('[data-modal]')
    console.log(modal)
  

  const functionButton = () => {
    // const expanded =
    //   menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    // menuBtnRef.classList.toggle('is-open');
    // menuBtnRefClose.classList.toggle('is-open');
    // menuBtnRef.setAttribute('aria-expanded', !expanded);
      mobileMenuRef.classList.toggle('is-open');
      modal.classList.toggle('is-hidden')
    };
 

  menuBtnRef.addEventListener('click', functionButton);
  menuBtnRefClose.addEventListener('click', functionButton);
})();
