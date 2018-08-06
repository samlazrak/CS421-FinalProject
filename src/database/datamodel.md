Data model:

CRUD - Create Read Update Delete

User:
id: string
email: string           | required
userName: string        | required
firstName: string
lastName: string
password: string        | required

Resource (Post):
id: string
title: string           | required
author: [User]          | required
img: string
url: string
description: string     | required
likes: int
comments: [Comment]
category: [Category]

Comment: 
post_id: Resource       | required
author: [User]          | required
description: string     | required
likes: int

Category: ( Javascript, Java, etc. )
id: int
title: string           | required
description: string
resources: [Resource]   | required

optional: 
followed_users: [User]
followed_categories: [Category]
followed_resource: [Resource]
favorites: [Resource]