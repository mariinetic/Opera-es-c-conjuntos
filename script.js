function calcular() {
    const conjunto = new Set(document.getElementById('conjunto').value.split(',').map(item => item.trim()));
    const conjunto2 = new Set(document.getElementById('conjunto2').value.split(',').map(item => item.trim()));

    const uniao = new Set([...conjunto, ...conjunto2]);
    const interseccao = new Set([...conjunto].filter(x => conjunto2.has(x)));
    const diferencaAB = new Set([...conjunto].filter(x => !conjunto2.has(x)));
    const diferencaBA = new Set([...conjunto2].filter(x => !conjunto.has(x)));
// calculando o resultado dos conjuntinhos
    document.getElementById('resultado').innerHTML = `
        <h2>Resultado:</h2>
        <p>União: {${[...uniao].join(', ')}}</p>
        <p>Intersecção: {${[...interseccao].join(', ')}}</p>
        <p>Diferença A - B: {${[...diferencaAB].join(', ')}}</p>
        <p>Diferença B - A: {${[...diferencaBA].join(', ')}}</p>
    `;
}
//comecei escrevendo no html mas decidi separar para ficar mais organizado!
