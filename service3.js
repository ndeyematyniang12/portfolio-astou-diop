    const boxes = document.querySelectorAll('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7');

    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.85;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                box.classList.add('animate');
            } else {
                box.classList.remove('animate');
            }
        });
    }

    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); // initial check
