import chef from "../IMAGES/robotic.png"
export default function Header(){
    return(
        <>
        <header id="main-header">
            <img id="robotchef" src= {chef} alt="robot-chef"/>
            <h1>Chef Claude</h1>
        </header>

        </>
    )
}