import './index.css'

function Classes(){
    const color='blue';
    const dangerous =true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-yellow'} wd-padding wd-fg-black`}>
                Dangerous Background 
            </div>
            <div className={`wd-bg-${color} wd-padding wd-fg-black`}>
                Blue Background 
            </div>
            <div className='wd-bg-red wd-padding wd-fg-black'>
                Red Background 
            </div>
        </div>
    )
};

export default Classes;