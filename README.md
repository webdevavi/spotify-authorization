# Spotify Authorization

## API Endpoint

`http://spotify-authorize-devavi.herokuapp.com`

## Client Credentials Flow

Since Spotify API restricts developers from getting access token by this flow through Client Side API call, this API can help in doing the same through Client Side API call.


**You do**  | Login with your **Client ID** and **Secret Key**.
---|---
**You get** | **Access Token**

### Have your application request authorization

The request is sent to the `/api/v1/token` endpoint of the API.

***`POST`***

`https://spotify-authorize-devavi.herokuapp.com/api/v1/token`


The header of this POST request must contain the following parameter:

Header Parameter  | Value
---|---
Authorization | (Required) Base 64 encoded string that contains the client ID and client secret key. The field must have the format: Authorization: `Basic <base64 encoded client_id:client_secret>`

**Example**

`curl -X "POST" -H "Authorization: Basic ZjM4ZjAw...WY0MzE=" https://spotify-authorize-devavi.herokuapp.com/api/v1/token`

### Response
> { "access_token": "NgCXRKc...MzYjw", "token_type": "bearer", "expires_in": 3600, }

**Please 🌟 the repo if it helped you!**
