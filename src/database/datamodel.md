Data model:

CRUD - Create Read Update Delete

User:
id: int
email: string
name: string
password: string

optional: 
followed_users: [User]
followed_categories: [Category]
followed_resource: [Resource]
favorites: [Resource]

Resource:
title: string
id: int
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
parent_id: int

Category: ( Javascript, Java, etc. )
title: string
id: int
description: string
resources: [Resource]
