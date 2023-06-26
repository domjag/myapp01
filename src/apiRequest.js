const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj)
    //dont need a response in the error - the state will take care of that faster    
    if (!response.ok) throw Error('Please reload the app')
       
    } catch (err) {
            errMsg = err.message
    } finally {
            return errMsg;
    }
}

export default apiRequest;