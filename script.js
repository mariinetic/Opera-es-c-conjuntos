function calcular() {
    const set1 = new Set(document.getElementById('set1').value.split(',').map(item => item.trim()));
    const set2 = new Set(document.getElementById('set2').value.split(',').map(item => item.trim()));

    const uniao = new Set([...set1, ...set2]);
    const interseccao = new Set([...set1].filter(x => set2.has(x)));
    const diferencaAB = new Set([...set1].filter(x => !set2.has(x)));
    const diferencaBA = new Set([...set2].filter(x => !set1.has(x)));
// calculando o resultado dos conjuntinhos
    document.getElementById('resultado').innerHTML = `
        <h2>Resultado:</h2>
        <p>União: {${[...uniao].join(', ')}}</p>
        <p>Intersecção: {${[...interseccao].join(', ')}}</p>
        <p>Diferença A - B: {${[...diferencaAB].join(', ')}}</p>
        <p>Diferença B - A: {${[...diferencaBA].join(', ')}}</p>
    `;
}
