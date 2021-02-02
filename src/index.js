import './css/main.css';

const obj = {
    foo: {
        bar: 1
    }
};

console.log('nullish-coalescing-operator example', obj.bar ?? 'Значения не существует');
console.log('optional-chaining example', obj?.bar?.foo);

document.addEventListener('DOMContentLoaded', () => {
    const chunkLoader = document.querySelector('[data-chunk-load]');
    const chunkContent = document.querySelector('[data-chunk-content]');
    chunkLoader.addEventListener('click', async e => {
        e.preventDefault();
        chunkContent.innerHTML = 'Загрузка';
        const content = await import(/* webpackChunkName: 'simple' */ './js/simple');
        chunkContent.innerHTML = content.default;
    });
});
