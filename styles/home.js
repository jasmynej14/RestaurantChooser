import { StyleSheet } from "react-native"

const homeStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    navBox:{
        flex:0.5,
        width:"75%",
        backgroundColor:"#FFA07A",
        alignItems:'center',
        justifyContent:'center'
    },
    navItem:{
        backgroundColor:'#FFD700',
        minWidth:"50%",
        margin:5,
        padding:5,
        borderRadius:50,
        borderColor:"#BDB76B",
        borderWidth:5
    },
    navText:{
        fontSize:20,
        textAlign:"center"
    }
})
export default homeStyles;