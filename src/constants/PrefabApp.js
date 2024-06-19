const ExampleAdministrationAcount = {
    name: null,
    save: null,
}

const ExampleWarehouse = {
    tags: [
        { label: 'Utilitario', value: 'utility' },
        { label: 'Cortante', value: 'cutting' },
        { label: 'Contundente', value: 'blunt' },
        { label: 'Consumível', value: 'consumable' },
        { label: 'Equipavel', value: 'equipable' },
        { label: 'Fabricável', value: 'craftable' }
    ]
}

const ExampleTools = [
    {
        thumbnail: "hammer-icon",
        name: "Martelo de madeira",
        owner: "system",
        tags: ['blunt', 'craftable', 'utility', 'equipable'],
        description: "ferramenta nescessaria para craft de itens"
    },
    {
        thumbnail: "single-sword-icon",
        name: "Espada de Orus",
        owner: "system",
        tags: ['cutting', 'equipable'],
        description: "feita pelo grande orus, otima contra magia"
    },
    {
        name: "Poção de vida",
        owner: "system",
        tags: ['craftable', 'utility', 'consumable'],
        description: "recupera 2 ponto de vida por rodada"
    }
]

export{
    ExampleAdministrationAcount,
    ExampleWarehouse,
    ExampleTools
}