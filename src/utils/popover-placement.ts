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

const popoverPlacement = (box: HTMLElement, host: HTMLElement, placement: placementType, changePlacement: Function) => {
    const { width, height } = box.getBoundingClientRect()
    const { left, right, top, bottom } = host.getBoundingClientRect()
    
    const places = placement.split('-')

    const bodyWidth = document.documentElement.clientWidth
    const bodyHeight = document.documentElement.clientHeight

    switch (places[0]) {
        case 'left':
            if (left < (width + 8)) {
                changePlacement(join(places))
            }
            break;

        case 'right':
            if (bodyWidth < (right + width + 8)) {
                changePlacement(join(places))
            }
            break;

        case 'top':
            if (top < (height + 8)) {
                changePlacement(join(places))
            }
            break;

        case 'bottom':
            if (bodyHeight < (bottom + height + 8)) {
                changePlacement(join(places))
            }
            break;

        default:
            break;
    }
}

export default popoverPlacement
