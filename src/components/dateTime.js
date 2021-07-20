import React, {Component} from 'react'

const getDateTime = (tz) => {
    const time = new Date((new Date().getTime()) + tz * 1000)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        moths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const addNull = (item) => {
        if (item.toString().length < 2)
            return '0' + item
        return item
    }
    return {
        'hours': addNull(time.getUTCHours()),
        'minutes': addNull(time.getUTCMinutes()),
        'seconds': addNull(time.getUTCSeconds()),
        'day': addNull(time.getDate()),
        'dayOfWeek': days[time.getDay()],
        'moth': moths[time.getMonth()],
        'year': time.getFullYear()
    }
}

const printTime = (tz) => {
    const {hours, minutes, seconds, dayOfWeek, day, moth, year} = getDateTime(tz)
    return `${hours}:${minutes}:${seconds} - ${dayOfWeek}, ${day} ${moth} ${year}`
}

class DateTime extends Component {
    props;
    constructor(props) {
        super(props);
        this.timeRef = React.createRef();
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.timeRef.current.innerText = printTime(this.props.timezone)
        }, 1000)

    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {

        return (

            <small ref={this.timeRef}>{printTime(this.props.timezone)}</small>

        )
    }
}

export default DateTime;