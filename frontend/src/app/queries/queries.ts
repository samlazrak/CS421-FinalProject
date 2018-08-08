import gql from 'graphql-tag'
import { Resource } from '../typeDefs/typedefs'

// get all users
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

// get all resources
export const allResources = gql`
    query {
        resources {
            id
            title
            author {
                userName
            }
            content
            link
        }
    }
`

// find a single user by userName
export const User = gql`
    query findUser($userName: String!) {
        userNim(userName: $userName) {
            id
            userName
            email
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

export const createPost = gql`
    mutation createPost (
        $author: ID!, $title: String!, $content: String!, $link: String
    ){
        newResource (
            author: $author, title: $title, content: $content, link: $link
        ){
            id
            author{
                id
                userName
            }
            title
            content
            link
        }
    }
`

export interface registerUserResponse {
    createrUser: any
    loading: boolean
}

export interface allResourcesResponse {
    resources: Resource[]
    loading: boolean
}

export interface createPostResponse {
    newResource: any
}