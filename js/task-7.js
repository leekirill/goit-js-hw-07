const rangeRef = document.querySelector('input#font-size-control');
rangeRef.addEventListener('input', range => {
    const spanRef = document.querySelector('span#text');
    const rangeValue = range.currentTarget.value + 'px';
    console.log(rangeValue);

    spanRef.style.fontSize = rangeValue;
});
