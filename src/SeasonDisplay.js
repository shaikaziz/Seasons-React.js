const React = require('react')
require('./SeasonDisplay.css')

const seasonConfig = {
    summer : {
        text : "Let's hit the beach",
        iconName : "sun",
    },
    winter : {
        text : "Burr its cold",
        iconName : "snowflake",
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        const ans = lat > 0 ? 'summer' : 'winter'
        return ans
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, window.month)
    const { text, iconName } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-right massive ${iconName} icon`}></i>
            <div className=" "><h1>{text}</h1></div>
            <i className={`icon-left massive ${iconName} icon`}></i>
            {/* <div className="error">{this.state.err}</div> */}
        </div>
    )
}

module.exports = SeasonDisplay