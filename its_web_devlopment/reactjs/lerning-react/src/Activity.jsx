import "./Activity.css"
function Activity({name,Colour}){
    // console.log(name,Colour);
    let styles = {
        color: Colour,
         '--after-bg': Colour 
     }
    return(
        <>
         <h1 style={styles} >{name}</h1>
        </>
    )

};
export default Activity;