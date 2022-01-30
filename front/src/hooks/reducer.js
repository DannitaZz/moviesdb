import axios from 'axios'
export const initialState = {
    data: [],
    initialData: [],
    details: {}
}

// const getData = async (page) => {
//     try {
//         const response = await axios.get(`http://localhost:3000/api/page/${page+1}`);
//         return response.data
//     } catch (err) {
//         console.error(err);
//     }
// }

export const reducer = (state, action) => {
    switch (action.type) {
        case 'getMovies':
            return {...state}
        case 'getDetails':
            return {...state}
        case 'getData':
            let index = action.index
            let page = parseInt((index+1) / 20)
            let apiData = action.payload
            let currentData = JSON.parse(JSON.stringify(state.data))
            for (let j=0; j<20; j++){
                currentData[index + j] = apiData[j]                
            }
            // console.log(currentData)
            return {...state, data: currentData}
        default:
            return {...state}
    }
}

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'getMovies':
//             return {...state}
//         case 'getDetails':
//             return {...state}
//         case 'test':
//             const index = parseInt(action.payload.visibleStartIndex);
//             // console.log(index % 20)
//             if ((index % 20) == 0){
//                 let page = parseInt((index+1) / 20)
//                 let apiData = getData(page = page)
//                 // console.log(apiData);
//                 let currentData = JSON.parse(JSON.stringify(state.data))
//                 for (let j=0; j<20; j++){
//                     // console.log(apiData[j])
//                     currentData[index + j] = apiData[j]                
//                 }
//                 console.log(currentData)
//                 return {...state, data: currentData}
//             }else{
//                 return {...state}
//             }
//         default:
//             return {...state}
//     }
// }