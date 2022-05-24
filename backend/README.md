# API Routes

Main route: https://untitle-camp.herokuapp.com/api/

## Products Routes

Route extenssion: /products/...

### Get Products

###### Params

- Page: Number and greater than 0
- Category?: Mountain+Bike / Xtreme / Camping / Off+Road / Utility

### Get Random Products

Route extenssion: .../random

###### Params

- quant: Number and greater than 0

### Get Products By ID

Route extenssion: .../{product-id}

### Post Products

###### Headers

- Authorization: 'Bearer {safe-key}'

###### Body

```
  {
    "products":
        {
          "image": number,
          "price": number,
          "tag": string,
          "category": string[],
          "name": string,
          "desc": string,
          "fetures": string[],
          "content": string
        }[]
 }
```

### Put Product

Route extenssion: .../{product-id}

###### Headers

- Authorization: 'Bearer {safe-key}'

###### Body

```
  {
    "products":
        {
          "image": number,
          "price": number,
          "tag": string,
          "category": string[],
          "name": string,
          "desc": string,
          "fetures": string[],
          "content": string
        }[]
 }
```

### Delete Product

Route extenssion: .../{product-id}

###### Headers

- Authorization: 'Bearer {safe-key}'

## User Routes

Route extenssion: /users/...

### Post Login

Route extenssion: .../login

###### Body

```
  {
    "email": string,
    "password": string
  }
```

### Post Signup

Route extenssion: .../signup

###### Body

```
  {
    "name": string,
    "email": string,
    "password": string
  }
```

### Get User Cart

Route extenssion: .../cart

###### Headers

- Authorization: 'Bearer {user-token}'

### Post Item to User Cart

Route extenssion: .../cart/{product-id}

###### Headers

- Authorization: 'Bearer {user-token}'

###### Body

```
  {
    "quant": number,
  }
```

### Delete Item From User Cart

Route extenssion: .../cart/{product-id}

###### Headers

- Authorization: 'Bearer {user-token}'

###### Body

```
  {
    "quant": number,
  }
```
