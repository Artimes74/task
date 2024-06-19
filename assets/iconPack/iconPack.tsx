import React from "react";
import Svg, {Path} from "react-native-svg";

type iconType = {
    width: number | string;
    height: number | string;
}

const WaterIcon = (props: iconType) => {
    const {width, height} = props
    return (
        <Svg width={width} height={height} viewBox="0 0 69 85" fill="none">
            <Path
                d="M36.9835 1.86855C35.4946 0.710482 33.4266 0.710482 31.9376 1.86855C24.0792 7.86571 0.876417 27.4288 1.0005 50.218C1.0005 68.6645 16.0141 83.7194 34.5019 83.7194C52.9897 83.7194 68.0033 68.7058 68.0033 50.2594C68.0446 27.8011 44.8005 7.90707 36.9835 1.86855Z"
                fill="#00B9FF" stroke="#292D32" stroke-width="2" stroke-miterlimit="10"/>
        </Svg>


    )
}

const CoffeeIcon = (props: iconType) => {
    const {width, height} = props
    return (
        <Svg width={width} height={height} viewBox="0 0 79 78" fill="none">
            <Path
                d="M61.7615 32.6313V60.7994C61.7615 69.7654 54.4886 76.9999 45.561 76.9999H17.2005C8.27291 76.9999 1 69.727 1 60.7994V32.6313C1 23.6652 8.27291 16.4308 17.2005 16.4308H45.561C54.4886 16.4308 61.7615 23.7037 61.7615 32.6313Z"
                fill="#868686" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14.4673 7.73418V1V7.73418Z" fill="#868686"/>
            <Path d="M14.4673 7.73418V1" stroke="#292D32" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path d="M29.8616 7.73418V1V7.73418Z" fill="#868686"/>
            <Path d="M29.8616 7.73418V1" stroke="#292D32" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path d="M45.2537 7.73418V1V7.73418Z" fill="#868686"/>
            <Path d="M45.2537 7.73418V1" stroke="#292D32" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path
                d="M77.9589 42.9829C77.9589 51.9105 70.686 59.1834 61.7584 59.1834V26.7822C70.686 26.7822 77.9589 34.0168 77.9589 42.9829Z"
                fill="#868686" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M1 38.5189H60.6841H1Z" fill="#868686"/>
            <Path d="M1 38.5189H60.6841" stroke="#292D32" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>

    )
}

const TeaIcon = (props: iconType) => {
    const {width, height} = props
    return (
        <Svg width={width} height={height} viewBox="0 0 62 78" fill="none">
            <Path
                d="M11.9762 4.7377C10.3588 4.51399 8.80848 5.40904 8.19351 6.92164C4.89808 14.8187 -4.02887 39.5268 5.92764 56.5572C13.9115 70.3856 32.981 77.4225 42.0795 61.1745C60.7 61.419 64.1585 41.4169 56.1746 27.5884C46.4853 10.7345 20.4498 5.88122 11.9762 4.7377Z"
                fill="#009821" stroke="#292D32" stroke-width="2" stroke-miterlimit="10"/>
            <Path d="M48.634 71.6644L33.0527 44.6768" stroke="#292D32" stroke-width="2" stroke-linecap="round"/>
        </Svg>

    )

}

const PlusIcon = (props: iconType) => {
    const {width, height} = props
    return (
        <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
            <Path d="M2 11H20" stroke="#149246" stroke-width="3" stroke-linecap="round"/>
            <Path d="M11.5 20L11.5 2" stroke="#149246" stroke-width="3" stroke-linecap="round"/>
        </Svg>

    )
}

const MinesIcon = (props: iconType) => {
    const {width} = props
    return (
        <Svg width={width} height="4" viewBox="0 0 22 4" fill="none">
            <Path d="M2 2H20" stroke="#CD0D0D" stroke-width="3" stroke-linecap="round"/>
        </Svg>

    )
}

export const IconPack: (width: number | string, height: number | string) => {
    name: string,
    icon: JSX.Element
}[] = (width: number | string, height: number | string) => [
    {name: 'water', icon: <WaterIcon width={width} height={height}/>},
    {name: 'coffee', icon: <CoffeeIcon width={width} height={height}/>},
    {name: 'tea', icon: <TeaIcon width={width} height={height}/>},
    {name: 'plus', icon: <PlusIcon width={width} height={height}/>},
    {name: 'mines', icon: <MinesIcon width={width} height={height}/>},
]
