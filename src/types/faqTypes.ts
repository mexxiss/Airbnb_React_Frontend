export interface IFaqData {
    _id: string,
    question: string,
    answer: string,
    __v: number, 
    page: string[]
}

export interface IFaqParams {
    page: string | null
}