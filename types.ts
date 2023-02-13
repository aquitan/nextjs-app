export type addresType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export type contactType = {
     name: string,
     email: string,
     id: string,
     address: addresType
}

export type headingType = {
    tag?: string,
    text: string
}

export type postType = {
    title: string,
    body: string,
    id: string
}

export type socialsType = {
    id: number,
    icon: string,
    path: string
}[]