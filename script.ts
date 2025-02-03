
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const json = await response.json();
    handleVendas(json);
}

fetchVendas();

type VendaTuple = [string, number, string, { marca: string; cor: string}];

function handleVendas(data: Array<VendaTuple>) {
    let totalVendas = 0;

    if (data) {
        data.forEach((venda) => {
            totalVendas+= venda[1];
            document.body.innerHTML = `
            <p>Total de vendas: ${totalVendas}</p>
            `;

        })
    }

    console.log("Total Vendas: " + totalVendas)
}

