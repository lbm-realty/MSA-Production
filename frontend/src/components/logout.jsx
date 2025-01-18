import '../css/logout.css'

const logout = () => {
    const handleLogout = () => {
        sessionStorage.removeItem('accessToken');
        window.location.href = '/login';
    }

    return (
        <div className="logout-outer">
            <button
             className='logout-btn'
             onClick={handleLogout}
             >Logout</button>
        </div>
    )
}

export default logout;