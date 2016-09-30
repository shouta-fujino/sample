curl --header "Authorization: key=AIzaSyAwXvwk0M3ivaaJNtwiQ9UE08y6UHTyBBk" \
     --header Content-Type:"application/json" \
     https://fcm.googleapis.com/fcm/send \
     -d "{\"to\": \"/topics/news\",\"priority\":\"high\",\"notification\": {\"title\": \"this is title\", \"body\": \"this is body\", \"icon\": \"ic_stat_ic_notification\"}}"