

function doSomething() {
    console.info('DOM loaded');
  }

  if (document.readyState === 'loading') { 
    console.info('hi'); // Loading hasn't finished yet
    // document.addEventListener('DOMContentLoaded', () =>{
    //     console.info('hi');
        
    // } );
  } else {  // `DOMContentLoaded` has already fired
    doSomething();
  }



