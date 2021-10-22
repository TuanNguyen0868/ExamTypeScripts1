import { ADD_SONGS, DELETE_SONG} from '../types'


const initialState = {
    listSongs: [
        
            {
                songId:"s1",
                songName:"Cơn Mưa Ngang Qua",
                singer:"Sơn Tặc MTP",
                author:"Sơn Tặc MTP",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=HHqbE_Z-tTI"
            },
            {
                songId:"s2",
                songName:"Quên",
                singer:"Noo Phước Thịnh",
                author:"Anh Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=ZV4rx7GZrPY"
            },
            {
                songId:"s3",
                songName:"Gạt Đi Nước Mắt",
                singer:"Noo Phước Thịnh",
                author:"Anh Tuấn",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=bD3B1I3Zgog"
            },
            {
                songId:"s4",
                songName:"Tim Không Cần",
                singer:"Tim",
                author:"Anh Hấu",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=7IPWNAiu4n0"
            },
            {
                songId:"s5",
                songName:"Chạy Trốn",
                singer:"G-Ducky",
                author:"Anh Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=-3jXY2YZ-wM&t=154s"
            },
            {
                songId:"s6",
                songName:"Cơn Mưa Ngang Qua",
                singer:"Sơn Tặc MTP",
                author:"Sơn Tặc MTP",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=HHqbE_Z-tTI"
            },
            {
                songId:"s7",
                songName:"Quên",
                singer:"Noo Phước Thịnh",
                author:"Anh Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=ZV4rx7GZrPY"
            },
            {
                songId:"s8",
                songName:"Gạt Đi Nước Mắt",
                singer:"Noo Phước Thịnh",
                author:"Anh Tuấn",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=bD3B1I3Zgog"
            },
            {
                songId:"s9",
                songName:"List Of Bin",
                singer:"Bin",
                author:"Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=JEb8ZyauJ_M"
            },
            {
                songId:"s10",
                songName:"Chạy Trốn",
                singer:"G-Ducky",
                author:"Anh Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=-3jXY2YZ-wM&t=154s"
            },
            {
                songId:"s11",
                songName:"Reality",
                singer:"Anh Tuấn Đẹp Trai",
                author:"Anh Bin",
                songImage:"/logo512.png",
                songlink:"https://www.youtube.com/watch?v=25zaPKEnXKs"
            }
        
    ] 
}
const songReducer = (state = initialState, action) => {
    switch(action.type){
            
        case ADD_SONGS:
            return{
                ...state,
                listSongs: [
                    ...state.listSongs,
                    action.payload
                ]
            }

        case DELETE_SONG:
            return{
                ...state,
                listSongs: state.listSongs.filter(song => song.songId !== action.payload)
            }
        default:
            return state    
    }
}
export default songReducer