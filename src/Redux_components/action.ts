export const HAPPY_CLICKED = "happy button clicked"
export const SAD_CLICKED = "sad button clicked"

export const HappyButtonClicked = (count: number) => ({
    type: HAPPY_CLICKED,
    payload: count
})

export const SadButtonClicked = (count: number) => ({
    type: SAD_CLICKED,
    payload: count
})