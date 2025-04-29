import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'pagar fatura do cartao',
            done: true
        },{
            _id: 2,
            description: 'reuniao com a equipe as 10:00',
            done: false 
        }, {
            _id: 3,
            description: 'consulta medicas na terça depois do almoço',
        }]
    })
})

export default rootReducer