import style from './HeaderStyle.module.css'
import logo from '../../assets/brainscoop_logo.png'
import homeIcon from '../../assets/home_icon.png'
import writeIcon from '../../assets/write_icon.png'

function Header({homeCallBack, writePostCallback})
{
    return <div className={style.container}>
        <div className={style.gradientBar}></div>
        <div className={style.logoContainer}>
            <div className={style.logoBg}>
                <img src={logo} alt="BrainScoopLogo" className={style.logo} />
            </div>

        </div>
            <div className={style.icons}>


            <button className={style.writeIcon}
            onClick={()=>{
                homeCallBack();
            }}
            >Home</button>
            <button className={style.writeIcon}
            onClick={()=>{
                writePostCallback();
            }}>Write Post</button>

        </div>
    </div>
}

export default Header