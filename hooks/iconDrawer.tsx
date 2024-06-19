import {IconPack} from "@/assets/iconPack/iconPack";

type Props = {
    iconName: string,
    width: number | string;
    height: number | string;
}

const iconDrawer = (iconName: string,
                    width: number | string,
                    height: number | string) => {
    return IconPack(width, height).find(icon => {
        return icon.name === iconName && icon.icon
    })?.icon
}

export default iconDrawer
