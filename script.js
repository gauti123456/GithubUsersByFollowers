$(document).ready(function () {

    var follower = $("#slider").val()
    var minimumfollower = 200  , maximumfollower = 400
    var user = '' 

    $("#follower").html("No of Follower: " + follower)

    searchUserByFollower(follower)


    $("#slider").change(function () {
        var follower = $("#slider").val()
        $("#follower").html("No of Follower: " + follower)

        searchUserByFollower(follower)

    })

    $("#minimum").change(function () {
        minimumfollower = $("#minimum").val()
        $("#minimumfollowers").html("Minimum Follower: " + minimumfollower)

        searchFollowers(minimumfollower,maximumfollower)

    })

    $("#maximum").change(function () {
        maximumfollower = $("#maximum").val()
        $("#maximumfollowers").html("Maximum Follower: " + maximumfollower)

        searchFollowers(minimumfollower,maximumfollower)

    })

    function searchFollowers(minimumfollower, maximumfollower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:" + minimumfollower + ".." + maximumfollower + "&per_page=100", function (data) {
            console.log(data)
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }


    function searchUserByFollower(follower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:>=" + follower + "&per_page=100", function (data) {
            
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }

})