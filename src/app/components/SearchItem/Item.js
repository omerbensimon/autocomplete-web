import './SearchItem.scss'
const Item = ({ employee, search }) => {
    const regex = new RegExp(`(${search})`, 'gi');
    const nameArray = employee.name.split(regex);
    const titleArray = employee.workTitle.split(regex);
    return (
        <div className='item d-flex'>
            <div className='avatarImgContainer'>
                <img className='avatarImg' src={employee.imageUrl} />
            </div>
            <div className='avatarContent'>
                <p>{nameArray.map((text) => text.toLowerCase() === search.toLowerCase() ? <span className='colored' >{text}</span> : <span  >{text}</span>)}</p>
                <p className='description'>{titleArray.map((text) => text.toLowerCase() === search.toLowerCase() ? <span className='colored' >{text}</span> : <span  >{text}</span>)}</p>
            </div>
        </div>
    )
}

export default Item