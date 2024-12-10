export interface Section1 {
    title: string;
    body: string;
}
export interface Section2_4 {
    title: string;
    body: string;
    image: string;
    text_direction: string
}
export interface Section3Points {
    title: string;
    body: string;
    _id: string
}
export interface Section3 {
    title: string;
    points: Section3Points[];
}
export interface Section5 {
    title: string;
    images: string[]
}

export interface AirbnbDubaiResponse {
    section1: Section1;
    section2: Section2_4;
    section3: Section3;
    section4: Section2_4;
    section5: Section5;
}