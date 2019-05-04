
    // your code goes here
    //example add to mens section. Use the id of the banner
    addScrollto('#mens-de');


    function addScrollto(element){
        let clone = document.querySelector('.Index-page-scroll-indicator').cloneNode( true );
        //clone.setAttribute( 'class', 'Index-page-scroll-indicator custom-scroll' );
        document.querySelector(element).appendChild( clone );

        function isScrolledIntoView(el) {
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;

            // Only completely visible elements return true:
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            // Partially visible elements return true:
            //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
            //if in view hide
            if(isVisible && !el.classList.contains('prevent')){
            el.classList.add('prevent')
            setTimeout(function(){ el.classList.add('hidden'); }, 500);
            //if scrolled above div only show element
            }else if((elemTop > window.innerHeight)){
            el.classList.remove('prevent')
            el.classList.remove('hidden');
            }
            return isVisible;
        }

        document.addEventListener('scroll', function(){
            isScrolledIntoView(clone)
        })
    }

