const counterButton = document.querySelectorAll('button');
const counterValue = document.querySelector('span#value');

// console.log(counterButton);

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

counterButton.forEach(btn => {
    btn.addEventListener('click', onClick => {
        if (btn.getAttribute('data-action') === 'decrement') {
            counter.decrement();
            counterValue.textContent = counter.value;
        } else {
            counter.increment();
            counterValue.textContent = counter.value;
        }
    });
});
