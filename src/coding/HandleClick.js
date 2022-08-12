// import React from "react";
import { React, Component } from "react";
//

// class Btn extends React.Component {
//     constructor() { //это специальный метод, служащий для создания и инициализации объектов, ед место где можно изменять/устанавливать состояния, напрямую перезаписывая их.
//         super(); // Обязательно вызываем, при объявлении конструктора, для предоставления доступа к (state or props)
//         this.state = { //this - создание полей....Классы могут принимать состояние объектов. Инициализируем состояние объекта - state и определение его состояния. {username: "dima"}
            // count: 0
    //     }
    // }
    // hendleInputForm (username) { - объявление метода для обновления состояния
       // this.setState({username});  - передача объекта в обработчик событий, при инициализации запроса к вводу данных в форму

    // render() { // Метод Можно получить доступ к инициализированному состоянию const {username} = this.state - извлечение ЮЗЕРНЕЙМ из состояния
        // return()//
            // <div>
            //     {this.state.username}  - 2-ой способ доступа к извлечению инициализированного объекта
            // </div>

//     }
// }
//
// export default Btn


export  default [
        {
            name: 'Comfort pursuit',
            scientificName: 'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.'
        },
        {
            name: 'Gorilla',
            scientificName: 'Gorilla beringei'
        },
        {
            name: 'Zebra',
            scientificName: 'Equus quagga',
            size: 322,
            diet: ['plants'],
            additional: {
                notes: 'There are three different species of zebra.',
                link: 'https://en.wikipedia.org/wiki/Zebra'
            }
        }
    ]






