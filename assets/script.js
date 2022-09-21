var topics = ["HTML", "CSS", "Git", "Javascript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function ListTopics() {
    console.log("Here are the topics we leanred about through prework!");

    for(var topic = 0; topic < topics.length; topic++) {
        console.log(topics[topic]);
    }
    
}

function SelectTopic() {
    console.log("Which topic should we study first?");

    if (randomTopic ==='HTML'){
        console.log("Let's study HTML!");
    }   else if (randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    }   else if (randomTopic ==='Git'){
        console.log("Let's study Git!");
    }   else if (randomTopic === 'Javascript'){
        console.log("Let's study Javascript!");
    }   else {
        console.log("Please try again!");
    }
}


ListTopics();
SelectTopic();