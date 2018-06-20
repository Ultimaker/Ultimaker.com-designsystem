This component embeds a youtube video into the site and takes account of the preferences stored in the cookiebar. When user hasn't given consent to place cookies its loads the youtube-nocookie.com variant. This component supports the following properties:

- autoplay: autoplay video, default: false
- modestbranding: show limited youtube branding, like small logo, default: true
- controls: show controls, default: true
- jsapi: enable or disable js api, default: true
- fullscreen: fullscreen button, default: true
- related: show related video's when video ends: default: true
- playsinline: force playing video inline on mobile, default: true
- start: start time of the video
- end: end after x seconds

Aspect ratio can be modified with the following classes:
- youtube-video--four-three
- youtube-video--eighteen-nine
- youtube-v
