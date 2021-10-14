import { StyleSheet } from "react-native"

const homeStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    
        
    },
    title:{
        fontSize:50,
        fontWeight:"bold",
        textAlign:"center"
    },
    header:{
        flex:1,
        backgroundColor:"#FCF3CF",
        margin:10,
        borderRadius:10,
        justifyContent:"center"
    },
    recs:{
        flex:4
    },
    recents:{
        flex:4,
    },
    rec:{
        backgroundColor:"#ECF0F1",
        margin:10,
        padding:10,
        borderRadius:10
    },
    order:{
        backgroundColor:"#ECF0F1",
        margin:10,
        padding:10,
        borderRadius:10
    }
})
export default homeStyles;