import styles from '../Components/Avatar.module.css'

export function Avatar({hasBorder = true, src}){

    return(
        <img className={hasBorder?styles.Avatar:styles.AvatarWithoutBorder} src={src}/>
    )
    
}