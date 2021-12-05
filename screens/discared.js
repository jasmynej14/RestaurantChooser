if(JSON.stringify(user) === "{}"){
    return (
        <SafeAreaView style={homeStyles.container}>
            <View style={homeStyles.header}>
                <Text style={{fontSize:60,textAlign:"center"}}>Dinery</Text>
            </View>
            
            
            <TouchableOpacity style={homeStyles.logIn} onPress={() => navigation.navigate('Profile')}>
                <Text>Log In/Sign Up for the Full Experience</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}