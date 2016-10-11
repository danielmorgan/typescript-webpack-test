import greeter = require('./greeter');
import $ = require('jquery');

$(() => {
    const greeting = greeter.greet('Foo');
    console.log(greeting);
});
