import swimming from '../assets/swimming.png'
import playGround from '../assets/playground.png'
import classRoom from '../assets/class.png'
import blackBg from '../assets/bg.png'

const RightPictures = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold my-3'>Q-Zone</h2>
            <div className='p-2 bg-slate-200'>
                <img className='w-full' src={swimming} alt="" />
                <img className='w-full' src={playGround} alt="" />
                <img className='w-full' src={classRoom} alt="" />
            </div>
            <div className='mt-2'>
                <img className='w-full' src={blackBg} alt="" />
            </div>

        </div>
    );
};

export default RightPictures;