import React from 'react'
import moment, { isDate, months, parseTwoDigitYear, relativeTimeThreshold } from 'moment'
import 'moment/locale/ja'

moment.locale('ja')

export default class Clock extends React.Component {
        state = {
            years: parseTwoDigitYear,
            date: isDate,
            months: months,
            dateTime: relativeTimeThreshold, 
        }

        componentDidMount() {
            this.setState ({ state: new Date() })
            this.interval = setInterval (() => {
                this.setState({dateTime: relativeTimeThreshold})
            }, 1000)
        }

    render() {
        return (
            <div style={{backgroundColor: 'pink', textAlign: 'center'}}>
                <h1>Hello World</h1>
                <h1>今日の日付 : {moment().format('YYYY/MM/DD')}</h1>
                <h2>時刻 : {moment().format('HH:mm:ss')}</h2>
            </div>
        )
    }
}