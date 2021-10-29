---
slug: "/blog/going-beyond-imgbb-api"
date: "2021-10-29"
title: "Going beyond the ImgBB API offerings"
summary: "Imgbb has a simple but restricted API, can we make it better?"
---

Uploading and sharing images temporarily is a big part of my workflow, and I make sure to make it as efficient as possible. I've previously made scripts, Raycast shortcuts and Shortcuts (Apple) to make sharing as fast as possible. I've been using ImgBB as an alternative to Imgur for some time because Imgur is focusing too much on *their* own platform more rather than letting users share images directly without going through their web interface *(read: they need profit)*. Specially on mobile, the direct link redirects to their annoying site with pop-ups to install their app.

As for Imgbb, they have a simple api that lets users upload images, but only caveat is that their api only supports uploading images to your public profile. It unfortunately does not support uploading images to public/private album which is my preferred option. You still get to share the individual image to certain people, but *not* share all your uploaded images. So I thought I would dig more into their web interface and see if I can find a way to upload images to a specific album.

<p class="blog-notice-yellow">TLDR: I did find a way. scroll <a href=#request>here</a> to skip the process of figuring it out and see how to do it yourself.</p>

First of all, I opened up their website to upload an image to a private album, and fired up Postman's Interceptor. Then I uploaded an image to the album normally. Let's open up Postman and see what's going to under the bonnet.

<img src="../../blogassets/post-3_1.png" alt="Postman Screenshot of POST Request" class="container" style="zoom:100%;margin-top:10px;margin-bottom:10px;" />

Oh hello! What do we have here? Lets see. They are sending a `POST` request to `https://ibb.com/json` with a `form-data` with the images. The `auth_token`is internal, not from the ones I created for my app. Now let's try to strip the request and try to make our own, without using the website.


<img src="../../blogassets/post-3_2.png" alt="Postman Screenshot of POST Response" class="container" style="zoom:100%;margin-top:10px;margin-bottom:10px;" />


Is that `status_code: 200` I see? Success! I stripped out most of the Headers, only keeping `Accept: application/json` and `Content-Type: multipart/form-data;`. I also went ahead and stripped the form-data as well. For the image, had to use the `File` type value for `source` and surprisingly, using tokens from the API key they gave me in`auth_token` worked, such a relief to avoid using their internal userapi, making it a cleaner solution.

After the success, I went ahead did a couple more tests, with varying album visibility, multiple file uploads etc. Well, multiple uploads with one request can not be done, even they themselves use separate `POST` requests when uploading multiple images, so all good in this case.

## Request

Now it's what you've been waiting for. The actual `POST` request that you will need for uploading image. Get the album ID from the website link itself, `https://ibb.co/album/<ALBUM_ID>` and the api key from [here](https://api.imgbb.com/)

* Request Type:`POST`-> `https://ibb.co/json`
* Headers:
  * `Accept`: `application/json`
  * `Content-Type`: `multipart/form-data;`
* Body:
  * `action`: `upload`
  * `album_id`: `YOUR_ALBUM_ID`
  * `auth_token`: `YOUR_API_KEY`
  * `source`: `IMAGE_FILE` (type: `file`)
  * `type`: `file`

If everything goes right, you will get a `200` status code, and in the response, you can filter out direct link to the image via `image.url` key, which then you can share with others without revealing other images on the album.

## Implementation

For Imgbb uploads, I currently have [Imgbb.sh](https://github.com/i3p9/Imgbb.sh) on github which works as a command-line tool to upload images,

I also have a Shortcuts on iOS (And now on macOS too, Monterey) to deal with uploading them. I have implemented my new method on the Shortcut already, which you can grab from [here](https://www.icloud.com/shortcuts/0d75372f52ab4fd198025ff4361b42dd), supports iOS/iPadOS 14 or above, and macOS Monetery 12 or above. On first run, it has a easy setup to input API key and Album ID.
