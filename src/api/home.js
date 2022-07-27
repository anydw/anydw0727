import request from "@/utils/request.js"

export const bannerList =(params) =>{
    return request({
        url:"/home/swiper",
        params
    })
}
export const rentingList = (params) =>{
    return request({
        url:"/home/groups",
        params
    })
}

