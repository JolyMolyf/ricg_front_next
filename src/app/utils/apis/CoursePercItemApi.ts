import axios from 'axios';
import { PercCarouselItem } from '../models/PercCarouselItem';

const getCoursePercItems = async () => {
    return await axios.get(`${process.env.BASE_URL}/course-percs-carousel-tiles?populate=*`).then((res) => {
        return res.data.data.map((itemJson:any) => {
            return PercCarouselItem.fromJsonApi(itemJson);
        })
    })
}


export default {
    getCoursePercItems
}