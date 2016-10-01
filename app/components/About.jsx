var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a neat little React Project, that can actually show you the
        current temperature at any city you like!
      </p>
      <p>
        Converting a cityname into the current temperature at that location
        may seem like internet-magic, but it is not! The trick's name is
        <b> API</b>, which stands for <i>application programing
        interface</i>. You can learn everything about this specific API by
        going to <a href="http://openweathermap.org/api">openweathermap.org</a>.
      </p>
      <p>
          A special thanks goes to Andrew Mead, who made this possible by
        creating this incredible <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">
        online-course</a> on Udemy!
      </p>
      <p>
        By the way, hallo Pk :)
      </p>
      <p className="show-for-medium">
        This paragraph vanishes on small screens! Try to smaller your window.
      </p>
    </div>
  );
};

module.exports = About;
