import '../css/prayerTimes.css'
import prayerTimes from '../images/prayer-times.png'

const PrayerTimes = () => {
    return (
        <div className="prayer-times-outer">
            <div className='prayer-times-inner'>
            <img src={prayerTimes} alt="" />
            </div>
        </div>
    )
}

export default PrayerTimes;