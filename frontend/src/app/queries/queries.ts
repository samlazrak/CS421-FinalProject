import gql from 'graphql-tag'

export const allUsers = gql`
    query {
        users {
            id
            userName
            firstName
            lastName
            email
        }
    }
`

export const User = gql`
    query($userName: String!) {
        user(userName: $userName) {
            userName
        }
    }
`

// userName, email, firstName, lastName, password
export const registerUser = gql`
    mutation registerUser(
        $userName: String!, $email: String!, $firstName: String, $lastName: String, $password: String!
    ){
        createUser(
            userName: $userName, email: $email, firstName: $firstName, lastName: $lastName, password: $password
        ){
            id
            userName
            email
            firstName
            lastName
        }
    }
`

export interface registerUserResponse {
    createrUser: any
    loading: boolean
}