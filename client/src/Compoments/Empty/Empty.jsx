import './Empty.css';
import box from '../../assets/images/empty-box.png'

const Empty = () => {
    return (
        <tr  className='empty-section'>
           <td colSpan="8"> <img src={box} alt="" /> <p>No data found</p></td>
        </tr>
    );
};

export default Empty;