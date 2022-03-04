import React from 'react'
import moment, { isDate, months, parseTwoDigitYear, relativeTimeThreshold } from 'moment'  //必要なものをmoment内からインポート
import 'moment/locale/ja'

moment.locale('ja')

export default class Clock extends React.Component {
        state = {
            years: parseTwoDigitYear,　　　　　　//stateで出力に必要なものを関数ないで宣言
            date: isDate,
            months: months,
            dateTime: relativeTimeThreshold, 
        }

        componentDidMount() {
            this.setState ({ state: new Date() })     //ここでコンポーネントがマウントされた時にstate内から渡す関数を宣言
            this.interval = setInterval (() => {
                this.setState({dateTime: relativeTimeThreshold})        //ここでコンポーネントがマウントされた時にstate内から渡す関数を宣言
            }, 1000)
        }

    render() {
        return (
            <div style={{backgroundColor: 'pink', textAlign: 'center'}}>
                <h1>Hello World</h1>
                <h1>今日の日付 : {moment().format('YYYY/MM/DD')}</h1>        {/* ここで出力 */}
                <h2>時刻 : {moment().format('HH:mm:ss')}</h2>               {/* ここで出力 */}
            </div>
        )
    }
}
