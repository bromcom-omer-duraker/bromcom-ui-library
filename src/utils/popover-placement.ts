import { placementType } from "../components/molecules/tooltip/tooltip"

const opposites = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top'
}

const join = (places: Array<string>) => {
    
    if (places.length === 1) {
        return opposites[places[0]]
    }

    return [opposites[places[0]], places[1]].join('-')
}

const popoverPlacement = (box: HTMLElement, placement: placementType, changePlacement: Function) => {
    const rect = box.getBoundingClientRect()
    const { left, right, top, bottom, width, height } = rect
    const places = placement.split('-')

    const bodyWidth = document.documentElement.clientWidth
    const bodyHeight = document.documentElement.clientHeight

    switch (places[0]) {
        case 'left':
            if (left < width) {
                changePlacement(join(places))
            }
            break;

        case 'right':
            if (bodyWidth < (right + width)) {
                changePlacement(join(places))
            }
            break;

        case 'top':
            if (top < height) {
                changePlacement(join(places))
            }
            break;

        case 'bottom':
            if (bodyHeight < (bottom + height)) {
                changePlacement(join(places))
            }
            break;

        default:
            break;
    }
}

export default popoverPlacement
