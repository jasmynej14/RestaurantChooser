import { StyleSheet } from "react-native"

const homeStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    
        
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center"
    },
    header:{
        flex:.5,
        backgroundColor:"#FCF3CF",
        margin:10,
        borderRadius:10,
        justifyContent:"center"
    },
    recs:{
        flex:6,

    },
    recents:{
        flex:4,
    },
    rec:{
        backgroundColor:"#ECF0F1",
        margin:10,
        padding:10,
        borderRadius:10,
        width:200,
        justifyContent:"center"
    },
    order:{
        backgroundColor:"#ECF0F1",
        margin:10,
        padding:10,
        borderRadius:10
    },
    logIn:{
        backgroundColor:"#F8C471",
        margin:20,
        padding:20,
        alignSelf:"center"
    },
    favorites:{
        flex:3
    }
})
export default homeStyles;