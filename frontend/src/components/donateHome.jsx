import '../css/donateHome.css'

const DonateHome = () => {
    return (
        <div className="outer-donate">
            <div className='inner-donate'>
                <h2>Make a Donation</h2>
                <p className='donate-hadees'>Prophet Muhammad (ﷺ), peace be upon him, said: "When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (ceaseless charity); a knowledge which is beneficial, or a virtuous descendant who prays for him (for the deceased)." (Muslim)</p>
                <button onClick={() => {
                    window.open('/donations')
                }} className='donate-btn-home'>Donate</button>
            </div>
        </div>
    )
}

export default DonateHome;