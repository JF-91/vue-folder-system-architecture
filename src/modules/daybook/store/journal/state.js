//manejador de estado retorna una funcion auto ejecutable
//donde se esta almacenando la imformacion es reactivo

export default () => ({
    isLoading: true,
    entries: [
        {
            id: '1',
            date: new Date().toDateString(),
            text: 'Aprender Vue.js',
            picture: null
        },
        {
            id: '2',
            date: new Date().toDateString(),
            text: 'lorem ipsum a lorem ipsum a  2 ' , 
            picture: null

        },
        {
            id: '3',
            date: new Date().toDateString(),
            text:'lorem ipsum',
            picture: null

        },

    ]
})