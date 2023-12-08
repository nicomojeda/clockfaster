import logo from './Logo-ClockFaster.png'
import styles from './maintitle.module.css'
import { HookUseState } from '../HookUseState/HookUseState'


export const MainTitle = () => {

return (

    <>
    

    <div className={styles.title}>

        <a href='/'>

            <img src={logo} alt="logo" className={styles.pictureTitle}/>

        </a>

        <h1>Universo Cine</h1>

        <HookUseState/>

    </div>


    </>

)


}