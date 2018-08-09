Data Model:

User:
id: string              | required
email: string           | required. unique
userName: string        | required, unique
firstName: string
lastName: string
password: string        | required
posts: [Resource]
comments: [Comment]

Resource (Post):
id: string              | required
title: string           | required
author: [User]          | required
url: string
description: string     | required
comments: [Comment]

Comment:
id: string              | required
post_id: Resource       | required
author: User            | required
description: string     | required


optional: 
followed_users: [User]
followed_categories: [Category]
followed_resource: [Resource]
favorites: [Resource]
Category ( Javascript, Java, etc. ):
id: int
title: string           | required
description: string
resources: [Resource]   | required