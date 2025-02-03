


//⬇️ dessa forma funciona

// interface ObjetoLiteral {
//     [key: string]: unknown;
// }

// function mostrarTitulo(obj: ObjetoLiteral) {
//     if ("titulo" in obj) {
//         console.log(obj.titulo);
//     }
// }

// ⬇️ dessa forma também

type ObjetoLiteral2 = Record<"titulo" | "autor", unknown>;


function mostrarTitulo(obj: ObjetoLiteral2) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}

//erros: ⬇️
mostrarTitulo(200)
mostrarTitulo("dsadsd")
mostrarTitulo(null)
mostrarTitulo(undefined)

mostrarTitulo({
    titulo: "HTML e CSS",
    autor: "Daniela Alves"
})

