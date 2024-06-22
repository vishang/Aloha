import { HighlightProps } from "../components/HighlightTile";
import { TopSpotTileProps } from "../components/Surfing/TopSpotTile";
import { images } from "./constants/assets";


export const highlights_tile : HighlightProps[] = [
    {
        id: 1,
        title: 'Surfing',
        subTitle: 'Best Hawaiian islands for surfing.',
        info : 'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.',
        image : images.surfing_bg
    },
    {
        id: 2,
        title: 'Hula',
        subTitle: 'Try it yourself.',
        info: '',
        image : images.hula_bg
    },
    {
        id: 3,
        title: 'Volcanoes',
        subTitle: 'Volcanic conditions can change at any time.',
        info: '',
        image : images.volcano_bg
    }
]

export const categories_tile = [

    {
        id : 1,
        title : 'Adventure'
    },
    {
        id : 2,
        title : 'Culinary'
    },
    {
        id : 3,
        title : 'Eco-tourism'
    },
    {
        id : 4,
        title : 'Family'
    },
    {
        id : 5,
        title : 'Sport'
    },
]

export const travel_guide = 
    {
        name : 'Hadwin Malone',
        year: '2012',
        image: images.user
    }

export const top_spots : TopSpotTileProps[] = [
    {
        id : 1,
        title : 'Maui',
        image: images.maui
    },
    {
        id : 2,
        title : 'Kauai',
        image: images.kauai
    },
    {
        id : 3,
        title : 'Honolulu',
        image: images.honolulu
    },
]
