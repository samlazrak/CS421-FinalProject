Data model:

CRUD - Create Read Update Delete

User:
id: string
email: string
userName: string
firstName: string
lastName: string
password: string

optional: 
followed_users: [User]
followed_categories: [Category]
followed_resource: [Resource]
favorites: [Resource]

Resource (Post):
title: string
id: string
author: [User]
img: string
url: string
description: string
likes: int
comments: [Comment]
category: [Category]

Comment: 
author: [User]
description: string
likes: int
parent_id: string
post_id: Resource

Category: ( Javascript, Java, etc. )
title: string
id: int
description: string
resources: [Resource]
