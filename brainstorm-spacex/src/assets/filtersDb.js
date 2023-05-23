export const FilterDb = [
    {
        name: 'Capsule Serial',
        value: 'capsule_serial',
        type:'text'
    },
    {
        name: 'Capsule Id',
        value: 'capsule_id',
        type: 'text'
    },
    {
        name: "Status",
        value: 'status',
        type: 'Select',
        options:['active','unknown','retired','destroyed']
    },
    {
        name: 'Landings',
        value: 'landings',
        type: 'number'
    }, {
        name: 'Reuse Count',
        value: 'reuse_count',
        type: 'number'
    },
]